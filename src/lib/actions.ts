import { eq, desc } from 'drizzle-orm';
import { db, schema } from '@/lib/db';
import {
  AdminLoginSchema,
  ContactFormInputSchema,
  UpdateStatusSchema,
  type ContactFormInput
} from '@/lib/validation';
import { comparePassword, hashIp } from '@/lib/security';
import { createAdminSession, deleteSession } from '@/lib/auth';
import { checkRateLimit } from '@/lib/rate-limit';

export async function submitContactMessage(
  input: ContactFormInput,
  context: { ip: string; userAgent: string }
) {
  const parsed = ContactFormInputSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false as const, message: 'Validation failed', issues: parsed.error.flatten() };
  }

  if (parsed.data.honeypot) {
    return { ok: false as const, message: 'Spam detected' };
  }

  const rate = checkRateLimit(hashIp(context.ip));
  if (!rate.ok) {
    return { ok: false as const, message: 'Too many requests', retryAfterMs: rate.retryAfterMs };
  }

  await db.insert(schema.contactMessages).values({
    fullName: parsed.data.fullName,
    email: parsed.data.email,
    phone: parsed.data.phone,
    preferredLanguage: parsed.data.preferredLanguage,
    subject: parsed.data.subject,
    message: parsed.data.message,
    status: 'new',
    ipHash: hashIp(context.ip),
    userAgent: context.userAgent,
    updatedAt: Date.now()
  });

  return { ok: true as const };
}

export async function adminLogin(email: string, password: string) {
  const parsed = AdminLoginSchema.safeParse({ email, password });
  if (!parsed.success) {
    return { ok: false as const, message: 'Invalid credentials payload' };
  }

  const user = (
    await db.select().from(schema.adminUsers).where(eq(schema.adminUsers.email, parsed.data.email)).limit(1)
  )[0];

  if (!user) {
    return { ok: false as const, message: 'Invalid email or password' };
  }

  const isValid = await comparePassword(parsed.data.password, user.passwordHash);
  if (!isValid) {
    return { ok: false as const, message: 'Invalid email or password' };
  }

  const session = await createAdminSession(user.id);

  await db
    .update(schema.adminUsers)
    .set({ lastLoginAt: Date.now() })
    .where(eq(schema.adminUsers.id, user.id));

  return { ok: true as const, session };
}

export async function adminLogout(rawToken?: string) {
  await deleteSession(rawToken);
  return { ok: true as const };
}

export async function updateMessageStatus(input: { id: number; status: 'new' | 'in_review' | 'replied' | 'archived' }) {
  const parsed = UpdateStatusSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false as const, message: 'Invalid status payload' };
  }

  await db
    .update(schema.contactMessages)
    .set({ status: parsed.data.status, updatedAt: Date.now() })
    .where(eq(schema.contactMessages.id, parsed.data.id));

  return { ok: true as const };
}

export async function listMessages(status?: string) {
  return db
    .select()
    .from(schema.contactMessages)
    .where(status ? eq(schema.contactMessages.status, status as any) : undefined)
    .orderBy(desc(schema.contactMessages.createdAt));
}
