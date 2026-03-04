import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';
import { toLibsqlFileUrl } from './utils';

const dbFile = process.env.DATABASE_FILE ?? './data/dev.db';
const resolved = toLibsqlFileUrl(dbFile);
const client = createClient({ url: resolved.url });
export const db = drizzle(client, { schema });
export { schema };
