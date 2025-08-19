import { ReactNode, Suspense } from "react";
import fs from "fs/promises";
import path from "path";
import MainLayout from "@/layouts/main-layout";
import { IApplicantDetails } from "@/types/applicants-types";
import { Loading } from "@/components/common";

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ id: string }>;
}) {
  // Fetch applicant details
  const filePath = path.join(process.cwd(), "src/lib/applicantDetails.json");
  const file = await fs.readFile(filePath, "utf-8");
  const details: Record<string, IApplicantDetails> = JSON.parse(file);
  const { id } = await params;
  const applicant = details[id] || null;

  // Pass applicant as prop to MainLayout
  return (
    <Suspense fallback={<Loading />}>
      <MainLayout applicant={applicant}>{children}</MainLayout>
    </Suspense>
  );
}
