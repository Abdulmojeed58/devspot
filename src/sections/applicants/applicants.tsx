"use client";

import { IApplicant } from "@/types/applicants-types";
import { ApplicantCard } from "@/components/common";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

async function fetchApplicants(query: string) {
  const url = query ? `/api/applicants?q=${encodeURIComponent(query)}` : "/api/applicants";
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch applicants");
  return res.json() as Promise<IApplicant[]>;
}

export default function Applicants() {
  const searchParams = useSearchParams();
  const search = searchParams.get("q") || "";
  const { data: applicants = [], isLoading, isError } = useQuery<IApplicant[]>({
    queryKey: ["applicants", search],
    queryFn: () => fetchApplicants(search),
    staleTime: 60_000, // 1 minute
  });

  return (
    <div className="p-4 md:ml-[60px] lg:ml-[70px] xl:ml-[82px] pb-0 min-h-[calc(100vh-5rem)]">
      <div className="flex items-center justify-between mb-11 mt-10">
        <h1 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-white font-raleway">Applicants</h1>
      </div>

      {isLoading && <div className="text-white">Loading...</div>}
      {isError && <div className="text-red-500">Failed to load applicants.</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[40px] gap-y-[56px]">
        {(applicants ?? []).length === 0 && !isLoading && !isError && (
          <div className="col-span-full text-white">No applicants found.</div>
        )}
        {(applicants ?? []).map((applicant: IApplicant) => (
          <ApplicantCard key={applicant.id} applicant={applicant} />
        ))}
      </div>
    </div>
  );
}
