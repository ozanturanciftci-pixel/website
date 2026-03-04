import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createClient } from '@libsql/client';
import { beforeAll, describe, expect, it, vi } from 'vitest';

const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'turanciftci-tests-'));
process.env.DATABASE_FILE = path.join(tempDir, 'test.db');

beforeAll(async () => {
  const db = createClient({ url: `file:${process.env.DATABASE_FILE!}` });
  const sql = fs.readFileSync(path.resolve('drizzle/0000_init.sql'), 'utf8');
  const statements = sql
    .split(';')
    .map((statement) => statement.trim())
    .filter(Boolean);
  await Promise.all(statements.map((statement) => db.execute(statement)));
});

describe('actions integration', () => {
  it('stores a contact message', async () => {
    vi.resetModules();
    const { submitContactMessage, listMessages } = await import('@/lib/actions');

    const result = await submitContactMessage(
      {
        fullName: 'Integration User',
        email: 'integration@example.com',
        phone: '+90 555 111 11 11',
        preferredLanguage: 'en',
        subject: 'Corporate setup',
        message: 'Need advice on company setup and tax optimization in Turkey.',
        consent: true,
        honeypot: ''
      },
      { ip: '127.0.0.1', userAgent: 'vitest' }
    );

    expect(result.ok).toBe(true);

    const records = await listMessages();
    expect(records.length).toBeGreaterThan(0);
    expect(records[0]?.email).toBe('integration@example.com');
  });

  it('rejects status payload with invalid id', async () => {
    vi.resetModules();
    const { updateMessageStatus } = await import('@/lib/actions');
    const result = await updateMessageStatus({ id: 0, status: 'new' });
    expect(result.ok).toBe(false);
  });
});
