import type { APIRoute } from 'astro';
import { getSessionCookieName, getAdminUserFromToken } from '@/lib/auth';
import { updateMessageStatus } from '@/lib/actions';

export const POST: APIRoute = async ({ params, request, cookies, redirect }) => {
  const token = cookies.get(getSessionCookieName())?.value;
  const user = await getAdminUserFromToken(token);

  if (!user) {
    return new Response('Unauthorized', { status: 401 });
  }

  const formData = await request.formData();
  const id = Number(params.id ?? formData.get('id') ?? 0);
  const status = String(formData.get('status') ?? 'new') as 'new' | 'in_review' | 'replied' | 'archived';

  const result = await updateMessageStatus({ id, status });
  if (!result.ok) {
    return new Response(result.message, { status: 400 });
  }

  return redirect('/admin/messages');
};
