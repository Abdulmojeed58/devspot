import { Applicant } from "@/sections";
import { IApplicantDetails } from "@/types/applicants-types";
import fs from "fs";
import path from "path";

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "src/lib/applicants.json");
  const file = fs.readFileSync(filePath, "utf-8");
  const applicants = JSON.parse(file);
  return applicants.map((a: { id: string }) => ({ id: a.id }));
}

export default async function ApplicantPage({ params }: { params: { id: string } }) {
  const filePath = path.join(process.cwd(), "src/lib/applicantDetails.json");
  const file = fs.readFileSync(filePath, "utf-8");
  const details: Record<string, IApplicantDetails> = JSON.parse(file);
  const applicant = details[params.id] || null;

  if (!applicant) {
    return <div className="text-red-500 p-8">Applicant not found.</div>;
  }
  return <Applicant applicant={applicant} />;
}