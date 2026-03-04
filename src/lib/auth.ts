import { and, eq, gt } from 'drizzle-orm';
import { db, schema } from '@/lib/db';
import { generateSessionToken, hashSessionToken } from '@/lib/security';

const SESSION_COOKIE = 'admin_session';
const SESSION_HOURS = 12;

export function getSessionCookieName() {
  return SESSION_COOKIE;
}

export async function createAdminSession(userId: number) {
  const rawToken = generateSessionToken();
  const tokenHash = hashSessionToken(rawToken);
  const expiresAt = Date.now() + SESSION_HOURS * 60 * 60 * 1000;

  await db.insert(schema.adminSessions).values({
    userId,
    tokenHash,
    expiresAt
  });

  return { rawToken, expiresAt };
}

export async function getAdminUserFromToken(rawToken?: string) {
  if (!rawToken) {
    return null;
  }

  const tokenHash = hashSessionToken(rawToken);
  const sessions = await db
    .select({
      userId: schema.adminSessions.userId,
      expiresAt: schema.adminSessions.expiresAt
    })
    .from(schema.adminSessions)
    .where(and(eq(schema.adminSessions.tokenHash, tokenHash), gt(schema.adminSessions.expiresAt, Date.now())))
    .limit(1);

  const session = sessions[0];
  if (!session) {
    return null;
  }

  const users = await db
    .select()
    .from(schema.adminUsers)
    .where(eq(schema.adminUsers.id, session.userId))
    .limit(1);

  return users[0] ?? null;
}

export async function deleteSession(rawToken?: string) {
  if (!rawToken) {
    return;
  }

  const tokenHash = hashSessionToken(rawToken);
  await db.delete(schema.adminSessions).where(eq(schema.adminSessions.tokenHash, tokenHash));
}
