import type { APIRoute } from 'astro';
import { adminLogin } from '@/lib/actions';
import { getSessionCookieName } from '@/lib/auth';

export const POST: APIRoute = async ({ request, cookies }) => {
  const formData = await request.formData();
  const email = String(formData.get('email') ?? '');
  const password = String(formData.get('password') ?? '');

  const result = await adminLogin(email, password);
  if (!result.ok) {
    return new Response(JSON.stringify(result), {
      status: 401,
      headers: { 'content-type': 'application/json' }
    });
  }

  cookies.set(getSessionCookieName(), result.session.rawToken, {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    path: '/',
    expires: new Date(result.session.expiresAt)
  });

  return new Response(JSON.stringify({ ok: true }), {
    headers: { 'content-type': 'application/json' }
  });
};
