import MainLayout from "@/layouts/main-layout";
import { Suspense } from "react";

const ApplicantsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainLayout>{children}</MainLayout>
    </Suspense>
  );
};

export default ApplicantsLayout;
