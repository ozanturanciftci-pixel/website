import 'dotenv/config';
import path from 'node:path';
import { createClient } from '@libsql/client';
import bcrypt from 'bcryptjs';

const email = process.env.ADMIN_EMAIL;
const password = process.env.ADMIN_PASSWORD;
const databaseFile = process.env.DATABASE_FILE ?? './data/dev.db';

if (!email || !password) {
  throw new Error('ADMIN_EMAIL and ADMIN_PASSWORD are required in environment.');
}

const absoluteDbPath = path.resolve(databaseFile.startsWith('file:') ? databaseFile.replace(/^file:/, '') : databaseFile);
const client = createClient({ url: `file:${absoluteDbPath}` });

const existing = await client.execute({
  sql: 'SELECT id FROM admin_users WHERE email = ? LIMIT 1',
  args: [email]
});

if (existing.rows.length > 0) {
  console.log(`Admin user already exists for ${email}`);
  process.exit(0);
}

const passwordHash = await bcrypt.hash(password, 12);
const now = Date.now();

await client.execute({
  sql: 'INSERT INTO admin_users (email, password_hash, created_at) VALUES (?, ?, ?)',
  args: [email, passwordHash, now]
});

console.log(`Admin user created for ${email}`);
