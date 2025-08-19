"use client";

import React, { useState, useEffect } from "react";
import ApplicantBanner from "./applicant-banner";
import StatusToggle from "./status-toggle";
import AboutApplicant from "./about-applicant";
import DeveloperAccount from "./developer-account";
import ApplicantCertifications from "./applicant-certifications";
import ApplicantSkills from "./applicant-skills";
import ApplicantCustomField from "./applicant-custom-field";
import { IApplicantDetails } from "@/types/applicants-types";
import Pagination from "@/components/common/pagination";
import { useRouter } from "next/navigation";
import { Button } from "@/components/common";
import Link from "next/link";

interface ApplicantProps {
  applicant: IApplicantDetails | null;
  applicantIds: string[];
  currentId: string;
}

const Applicant = ({ applicant, applicantIds, currentId }: ApplicantProps) => {
  const router = useRouter();
  // Move hooks before any early return
  const [openToWork, setOpenToWork] = useState(applicant?.openToWork ?? false);
  const [openToProjects, setOpenToProjects] = useState(
    applicant?.openToProjects ?? false
  );

  const idx = applicantIds.indexOf(currentId);
  const prevId = idx > 0 ? applicantIds[idx - 1] : null;
  const nextId = idx < applicantIds.length - 1 ? applicantIds[idx + 1] : null;

  // Keyboard navigation: left arrow for prev, right arrow for next
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft" && prevId) {
        router.push(`/applicants/${prevId}`);
      } else if (e.key === "ArrowRight" && nextId) {
        router.push(`/applicants/${nextId}`);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevId, nextId, router]);

  if (!applicant)
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] text-center">
        <h1 className="text-3xl font-bold mb-4 text-white">
          Applicant Not Found
        </h1>
        <p className="text-dev-text-muted mb-8">
          Sorry, we couldn&apos;t find the applicant you were looking for.
        </p>
        <Link href="/applicants">
          <Button variant="primary">Back to Applicants</Button>
        </Link>
      </div>
    );

  return (
    <div className="relative">
      {/* Hero Section with Gradient Background */}
      <ApplicantBanner
        applicant={applicant}
        openToWork={openToWork}
        openToProjects={openToProjects}
      />

      {/* Main Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-1">
            <div className="grid gap-6">
              <StatusToggle
                openToWork={openToWork}
                setOpenToWork={setOpenToWork}
                openToProjects={openToProjects}
                setOpenToProjects={setOpenToProjects}
              />
              <AboutApplicant applicant={applicant} />
              <DeveloperAccount applicant={applicant} />
              {applicant.certifications && (
                <ApplicantCertifications applicant={applicant} />
              )}
              <ApplicantSkills applicant={applicant} />
            </div>
          </div>

          {/* Right Column - Custom Fields */}
          <div className="lg:col-span-2">
            <ApplicantCustomField applicant={applicant} />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 flex justify-end items-center py-3 px-4 gap-8 bg-dev-card">
        <Pagination
          onPrev={() => prevId && router.push(`/applicants/${prevId}`)}
          onNext={() => nextId && router.push(`/applicants/${nextId}`)}
          disablePrev={!prevId}
          disableNext={!nextId}
        />
        <div className="flex gap-6 items-center">
          <Button variant="danger" size="md">
            Reject
          </Button>
          <Button variant="gradient" size="md">
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Applicant;
