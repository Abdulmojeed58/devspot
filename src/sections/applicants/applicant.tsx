"use client";
import { useParams } from "next/navigation";
import ApplicantBanner from "./applicant-banner";
import StatusToggle from "./status-toggle";
import AboutApplicant from "./about-applicant";
import DeveloperAccount from "./developer-account";
import ApplicantCertifications from "./applicant-certifications";
import ApplicantSkills from "./applicant-skills";
import ApplicantCustomField from "./applicant-custom-field";

const applicantData = {
  "russel-french": {
    id: "russel-french",
    name: "Russel French",
    role: "Senior Developer",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
    status: "Open to work",
    matchPercentage: 76,
    location: "San Francisco, United States",
    experience: "5 years of experience",
    website: "Website Title",
    about:
      "Russel is a web & mobile developer who is truly full-stack. His main skill is the Mobile app development with React Native. He has been a lead developer both in the backend and client applications, solutions engineer, and technical project manager. Back then, he pivots to web at Node.js and React.",
    skills: ["React", "React Native", "JavaScript", "Node.js", "Python"],
    customFields: [
      {
        id: 1,
        question: "Describe your experience with CSS",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare bibendum tellus sed ipsum convallis pretium. Nullam et mi rutie dieam legesind. Integer vestibulum, orci tempor ipsum convallis pretium.",
        date: "MAY 21, 2023 at 1:19PM",
      },
      {
        id: 2,
        question: "Describe your experience with CSS",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare bibendum tellus sed ipsum convallis pretium. Nullam et mi rutie dieam legesind. Integer vestibulum, orci tempor ipsum convallis pretium.",
        date: "MAY 21, 2023 at 1:19PM",
      },
      {
        id: 3,
        question: "Name",
        answer:
          "Placerat et adipiscing molla lectus vulputate massa, sodamina. Nullam elit nulla placerat dignissim quam arcu.",
        date: "MAY 21, 2023 at 1:19PM",
      },
    ],
  },
};

const Applicant = () => {
  const { id } = useParams<{ id: string }>();
  const applicant = applicantData[String(id) as keyof typeof applicantData];

  return (
    <div className="relative">
      {/* Hero Section with Gradient Background */}
      <ApplicantBanner applicant={applicant} />

      {/* Main Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-1">
            <div className="grid gap-6">
              <StatusToggle />

              <AboutApplicant applicant={applicant} />

              <DeveloperAccount />

              <ApplicantCertifications />

              <ApplicantSkills />
            </div>
          </div>

          {/* Right Column - Custom Fields */}
          <div className="lg:col-span-2">
            <ApplicantCustomField applicant={applicant} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applicant;
