import type { APIRoute } from 'astro';
import { adminLogout } from '@/lib/actions';
import { getSessionCookieName } from '@/lib/auth';

export const POST: APIRoute = async ({ cookies, redirect }) => {
  const token = cookies.get(getSessionCookieName())?.value;
  await adminLogout(token);

  cookies.delete(getSessionCookieName(), { path: '/' });
  return redirect('/admin/login');
};
