import { Applicants } from "@/sections";
import ApplicantsClientProvider from "@/sections/applicants/ApplicantsClientProvider";
import { Suspense } from "react";

export default function ApplicantsPage() {
  return (
    <ApplicantsClientProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Applicants />
      </Suspense>
    </ApplicantsClientProvider>
  );
}
