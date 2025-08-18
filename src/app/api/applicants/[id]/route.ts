import { NextRequest } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { IApplicantDetails } from '@/types/applicants-types';

export const dynamic = 'force-dynamic';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const filePath = path.join(process.cwd(), 'src/lib/applicantDetails.json');
  const file = await fs.readFile(filePath, 'utf-8');
  const details: Record<string, IApplicantDetails> = JSON.parse(file);
  const applicant = details[params.id];

  if (!applicant) {
    return new Response(JSON.stringify({ error: 'Applicant not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify(applicant), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=60',
    },
  });
}
