import type { APIRoute } from 'astro';
import { subscribeNewsletter } from '@/lib/actions';

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const result = await subscribeNewsletter({
    fullName: String(formData.get('fullName') ?? ''),
    email: String(formData.get('email') ?? ''),
    consent: formData.get('consent') === 'on' || formData.get('consent') === 'true',
    source: String(formData.get('source') ?? 'website')
  });

  if (!result.ok) {
    return new Response(JSON.stringify({ ok: false, message: 'Kayit basarisiz. Lutfen tekrar deneyin.' }), {
      status: 400,
      headers: { 'content-type': 'application/json' }
    });
  }

  return new Response(JSON.stringify({ ok: true, message: result.message }), {
    headers: { 'content-type': 'application/json' }
  });
};
