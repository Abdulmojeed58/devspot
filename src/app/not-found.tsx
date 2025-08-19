import Link from "next/link";
import { Button } from "@/components/common";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-3xl font-bold mb-4 text-white">Applicant Not Found</h1>
      <p className="text-dev-text-muted mb-8">Sorry, we couldn&apos;t find the applicant you were looking for.</p>
      <Link href="/applicants">
        <Button variant="primary">Back to Applicants</Button>
      </Link>
    </div>
  );
}
