import { Applicant } from "@/sections";
import { IApplicantDetails } from "@/types/applicants-types";
import fs from "fs/promises";
import path from "path";

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "src/lib/applicants.json");
  const file = await fs.readFile(filePath, "utf-8");
  const applicants = JSON.parse(file);
  return applicants.map((a: { id: string }) => ({ id: a.id }));
}

// Update the type definition for context
interface ApplicantPageProps {
  params: Promise<{ id: string }>;
}

export default async function ApplicantPage({ params }: ApplicantPageProps) {
  // Await the params to get the actual id object
  const { id } = await params;

  const filePath = path.join(process.cwd(), "src/lib/applicantDetails.json");
  const file = await fs.readFile(filePath, "utf-8");
  const details: Record<string, IApplicantDetails> = JSON.parse(file);
  const applicant = details[id] || null; // Use the awaited 'id'

  // Get all applicant IDs for pagination
  const applicantsFile = path.join(process.cwd(), "src/lib/applicants.json");
  const applicantsRaw = await fs.readFile(applicantsFile, "utf-8");
  const applicants = JSON.parse(applicantsRaw);
  const applicantIds = applicants.map((a: { id: string }) => a.id);

  return <Applicant applicant={applicant} applicantIds={applicantIds} currentId={id} />;
}