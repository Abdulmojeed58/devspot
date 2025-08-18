import { NextRequest } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { IApplicant } from '@/types/applicants-types';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q')?.toLowerCase() || '';
  const sort = searchParams.get('sort') || '';

  const filePath = path.join(process.cwd(), 'src/lib/applicants.json');
  const file = await fs.readFile(filePath, 'utf-8');
  let applicants: IApplicant[] = JSON.parse(file);

  if (q) {
    applicants = applicants.filter((a) =>
      a.name.toLowerCase().includes(q) ||
      a.title.toLowerCase().includes(q) ||
      a.location.toLowerCase().includes(q) ||
      a.skills.some((s) => s.toLowerCase().includes(q))
    );
  }

  if (sort === 'match') {
    applicants = applicants.sort((a, b) => b.match - a.match);
  } else if (sort === 'status') {
    applicants = applicants.sort((a, b) => a.decision.localeCompare(b.decision));
  }

  return new Response(JSON.stringify(applicants), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=60',
    },
  });
}
