// Placeholder to ensure /api directory exists for Next.js API routes.
export const dynamic = 'force-static';
export async function GET() {
  return new Response('API root', { status: 200 });
}
