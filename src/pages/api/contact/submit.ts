import type { APIRoute } from 'astro';
import { submitContactMessage } from '@/lib/actions';
import { isLang, SITE_CONTENT } from '@/content/site';

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const formData = await request.formData();
  const langValue = String(formData.get('lang') ?? 'tr');
  const lang = isLang(langValue) ? langValue : 'tr';

  const result = await submitContactMessage(
    {
      fullName: String(formData.get('fullName') ?? ''),
      email: String(formData.get('email') ?? ''),
      phone: String(formData.get('phone') ?? ''),
      preferredLanguage: String(formData.get('preferredLanguage') ?? 'tr') as 'tr' | 'en' | 'es',
      subject: String(formData.get('subject') ?? ''),
      message: String(formData.get('message') ?? ''),
      consent: formData.get('consent') === 'on' || formData.get('consent') === 'true',
      honeypot: String(formData.get('honeypot') ?? '')
    },
    {
      ip: clientAddress ?? '127.0.0.1',
      userAgent: request.headers.get('user-agent') ?? 'unknown'
    }
  );

  const t = SITE_CONTENT[lang].contact.form;

  if (!result.ok) {
    return new Response(
      JSON.stringify({ ok: false, message: result.message.includes('Too many') ? 'Too many requests.' : t.error }),
      { status: 400, headers: { 'content-type': 'application/json' } }
    );
  }

  return new Response(JSON.stringify({ ok: true, message: t.success }), {
    headers: { 'content-type': 'application/json' }
  });
};
