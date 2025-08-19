import { Loading } from "@/components/common";
import { Applicants } from "@/sections";
import ApplicantsClientProvider from "@/sections/applicants/ApplicantsClientProvider";
import { Suspense } from "react";

export default function ApplicantsPage() {
  return (
    <ApplicantsClientProvider>
      <Suspense fallback={<Loading />}>
        <Applicants />
      </Suspense>
    </ApplicantsClientProvider>
  );
}
