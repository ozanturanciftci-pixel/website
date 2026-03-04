import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';
import { createClient } from '@libsql/client';

const databaseFile = process.env.DATABASE_FILE ?? './data/dev.db';
const absoluteDbPath = path.resolve(databaseFile.startsWith('file:') ? databaseFile.replace(/^file:/, '') : databaseFile);
const dbUrl = `file:${absoluteDbPath}`;
const migrationsDir = path.resolve('./drizzle');

if (!fs.existsSync(path.dirname(absoluteDbPath))) {
  fs.mkdirSync(path.dirname(absoluteDbPath), { recursive: true });
}

const client = createClient({ url: dbUrl });

const migrationFiles = fs
  .readdirSync(migrationsDir)
  .filter((name) => name.endsWith('.sql'))
  .sort((a, b) => a.localeCompare(b));

for (const file of migrationFiles) {
  const sql = fs.readFileSync(path.join(migrationsDir, file), 'utf8');
  const statements = sql
    .split(';')
    .map((statement) => statement.trim())
    .filter(Boolean);

  for (const statement of statements) {
    await client.execute(statement);
  }

  console.log(`Applied migration: ${file}`);
}

console.log(`Migration complete for ${absoluteDbPath}`);
