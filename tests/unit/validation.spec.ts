import { describe, expect, it } from 'vitest';
import { ContactFormInputSchema, UpdateStatusSchema } from '@/lib/validation';

describe('ContactFormInputSchema', () => {
  it('accepts valid payload', () => {
    const payload = {
      fullName: 'Ozan Turanciftci',
      email: 'ozan@example.com',
      phone: '+90 555 111 22 33',
      preferredLanguage: 'tr',
      subject: 'Vergi inceleme sureci',
      message: 'Sirketimizde baslayan vergi incelemesi icin temsil talep ediyoruz.',
      consent: true,
      honeypot: ''
    };

    const result = ContactFormInputSchema.safeParse(payload);
    expect(result.success).toBe(true);
  });

  it('rejects payload without consent', () => {
    const result = ContactFormInputSchema.safeParse({
      fullName: 'Test User',
      email: 'test@example.com',
      phone: '+90 555 000 00 00',
      preferredLanguage: 'en',
      subject: 'Tax issue',
      message: 'Need legal support for a tax dispute in Turkey.',
      consent: false,
      honeypot: ''
    });

    expect(result.success).toBe(false);
  });
});

describe('UpdateStatusSchema', () => {
  it('accepts valid statuses', () => {
    const result = UpdateStatusSchema.safeParse({ id: 1, status: 'in_review' });
    expect(result.success).toBe(true);
  });

  it('rejects invalid statuses', () => {
    const result = UpdateStatusSchema.safeParse({ id: 1, status: 'done' });
    expect(result.success).toBe(false);
  });
});
