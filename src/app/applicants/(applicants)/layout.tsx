import { Loading } from "@/components/common";
import MainLayout from "@/layouts/main-layout";
import { Suspense } from "react";

const ApplicantsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<Loading />}>
      <MainLayout>{children}</MainLayout>
    </Suspense>
  );
};

export default ApplicantsLayout;
