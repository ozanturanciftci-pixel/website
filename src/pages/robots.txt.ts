import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const site = 'https://www.turanciftcilaw.com';
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${site}/sitemap-index.xml\n`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
};
