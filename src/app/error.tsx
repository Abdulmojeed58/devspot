"use client";
import Link from "next/link";
import { Button } from "@/components/common";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-3xl font-bold mb-4 text-white">Something went wrong</h1>
      <p className="text-dev-text-muted mb-8">{error.message || "An unexpected error occurred while loading the applicant."}</p>
      <div className="flex gap-4">
        <Button variant="primary" onClick={() => reset()}>Try Again</Button>
        <Link href="/applicants">
          <Button variant="outline">Back to Applicants</Button>
        </Link>
      </div>
    </div>
  );
}
