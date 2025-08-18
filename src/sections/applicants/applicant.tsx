"use client";

import ApplicantBanner from "./applicant-banner";
import StatusToggle from "./status-toggle";
import AboutApplicant from "./about-applicant";
import DeveloperAccount from "./developer-account";
import ApplicantCertifications from "./applicant-certifications";
import ApplicantSkills from "./applicant-skills";
import ApplicantCustomField from "./applicant-custom-field";
import { IApplicantDetails } from "@/types/applicants-types";
import { useState } from "react";
import Pagination from "@/components/common/pagination";

const Applicant = ({ applicant }: { applicant: IApplicantDetails | null }) => {
  const [openToWork, setOpenToWork] = useState(applicant?.openToWork || false);
  const [openToProjects, setOpenToProjects] = useState(
    applicant?.openToProjects || false
  );
  if (!applicant)
    return <div className="text-red-500 p-8">Applicant not found.</div>;

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
              <ApplicantCertifications applicant={applicant} />
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
        <Pagination />
        <div className="flex gap-6 items-center">
          <button className="px-3 md:px-4 py-2 border border-dev-border text-[#FF9330] rounded-lg hover:bg-dev-card-hover transition-colors flex items-center gap-2 bg-[#75421D] text-base md:text-lg font-semibold leading-8">
            Reject
          </button>
          <button className="px-3 md:px-4 py-2 border border-dev-border text-white rounded-lg hover:bg-dev-card-hover transition-colors flex items-center gap-2 bg-color-gradient-purple-blue text-base md:text-lg font-semibold leading-8">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default Applicant;
