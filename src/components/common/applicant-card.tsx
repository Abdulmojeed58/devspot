import Link from "next/link";
import { IApplicant } from "@/types/applicants-types";
import Image from "next/image";
import Progress from "./progress";
import { StarIcon } from "../icons";

const statusColors = {
    rejected: "bg-[#552807] text-[#FF9330]",
    accepted: "bg-color-gradient-purple-blue text-[#F7F7FF]",
    pending: "bg-[#594707] text-[#FFCC00]",
    none: ""
  };

const ApplicantCard = ({ applicant }: { applicant: IApplicant }) => {
  return (
    <Link
      key={applicant.id}
      href={`/applicants/${applicant.id}`}
      className="block group"
    >
      <div className="bg-dev-card rounded-lg py-6 px-[20px] hover:bg-dev-card-hover transition-colors">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start gap-4 lg:gap-6">
            <Image
              src={applicant.avatarUrl}
              alt={applicant.name}
              className="rounded-full object-cover border border-white"
              width={72}
              height={72}
            />
            <div>
              <h3 className="font-bold text-[24px] text-white">{applicant.name}</h3>
              <p className="text-base font-semibold leading-7 text-dev-text-muted mt-[1.6px]">{applicant.title}</p>
              <p className="text-[10px] font-medium leading-3 text-[#89898C] font-roboto">{applicant.location}</p>
            </div>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium leading-6 font-roboto ${
              statusColors[applicant.decision]
            }`}
          >
            {applicant.status}
          </span>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-3 mb-5">
          <div className="flex items-center gap-2 py-1 px-4 bg-[#000375] rounded-full">
            <StarIcon />
            <p className="text-[14px] font-medium leading-6 text-[#ADAFFA] font-roboto">{applicant.likes}</p>
          </div>
          {applicant.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#2B2B31] rounded-full text-sm font-medium leading-6 font-roboto text-[#E7E7E8]"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Match Percentage */}
        <Progress match={applicant.match} />
      </div>
    </Link>
  );
};

export default ApplicantCard;
