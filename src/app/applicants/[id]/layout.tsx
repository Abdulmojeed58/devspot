import { ReactNode } from "react";
import fs from "fs/promises";
import path from "path";
import MainLayout from "@/layouts/main-layout";
import { IApplicantDetails } from "@/types/applicants-types";

export default async function ApplicantIdLayout({ children, params }: { children: ReactNode; params: { id: string } }) {
  // Fetch applicant details
  const filePath = path.join(process.cwd(), "src/lib/applicantDetails.json");
  const file = await fs.readFile(filePath, "utf-8");
  const details: Record<string, IApplicantDetails> = JSON.parse(file);
  const applicant = details[params.id] || null;

  // Pass applicant as prop to MainLayout
  return <MainLayout applicant={applicant}>{children}</MainLayout>;
}
