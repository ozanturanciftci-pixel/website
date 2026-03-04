import { z } from 'zod';

export const ContactFormInputSchema = z.object({
  fullName: z.string().min(2).max(120),
  email: z.string().email().max(180),
  phone: z.string().min(6).max(30),
  preferredLanguage: z.enum(['tr', 'en', 'es']),
  subject: z.string().min(3).max(160),
  message: z.string().min(12).max(4000),
  consent: z
    .boolean()
    .refine((value) => value === true, { message: 'Consent is required' }),
  honeypot: z.string().max(0).optional().default('')
});

export const AdminLoginSchema = z.object({
  email: z.string().email().max(180),
  password: z.string().min(8).max(120)
});

export const UpdateStatusSchema = z.object({
  id: z.number().int().positive(),
  status: z.enum(['new', 'in_review', 'replied', 'archived'])
});

export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;
