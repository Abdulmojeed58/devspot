import Link from "next/link";
import { IApplicant } from "@/types/applicants-types";
import Image from "next/image";
import Progress from "./progress";
import { StarIcon } from "../icons";
import Chip from "./chip";

const ApplicantCard = ({ applicant }: { applicant: IApplicant }) => {
  return (
    <Link
      key={applicant.id}
      href={`/applicants/${applicant.id}`}
      className="block group"
    >
      <div className="bg-dev-card rounded-lg py-4 px-3 sm:py-6 sm:px-5 md:px-[20px] hover:bg-dev-card-hover transition-colors">
        {/* Header */}
        <div className="flex flex-col sm:flex-row md:flex-col xl:flex-row sm:items-start md:items-center xl:items-start sm:justify-between md:justify-between xl:justify-start gap-4 sm:gap-0 md:gap-4 xl:gap-0 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row md:flex-col xl:flex-row items-center sm:items-start md:items-center xl:items-start gap-3 sm:gap-4 md:gap-3 xl:gap-4 w-full">
            <Image
              src={applicant.avatarUrl}
              alt={applicant.name}
              className="rounded-full object-cover border border-white w-16 h-16 sm:w-[72px] sm:h-[72px]"
              width={72}
              height={72}
            />
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-white">{applicant.name}</h3>
              <p className="text-sm sm:text-base font-semibold leading-6 sm:leading-7 text-dev-text-muted mt-1.5 truncate overflow-hidden whitespace-nowrap max-w-[180px] sm:max-w-[220px] lg:max-w-[100px] xl:max-w-[120px]">{applicant.title}</p>
              <p className="text-[10px] sm:text-xs font-medium leading-3 text-[#89898C] font-roboto truncate overflow-hidden whitespace-nowrap max-w-[100px] sm:max-w-[140px] lg:max-w-[100px] xl:max-w-[120px]">{applicant.location}</p>
            </div>
          </div>
          <Chip status={applicant.decision} />
        </div>

        {/* Skills */}
        <div className="overflow-x-auto whitespace-nowrap mb-4 sm:mb-5 scrollbar-none" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
          <style>{`
            .scrollbar-none::-webkit-scrollbar { display: none; }
          `}</style>
          <div className="inline-flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1 sm:gap-2 py-1 px-3 sm:px-4 bg-[#000375] rounded-full">
              <StarIcon />
              <p className="text-xs sm:text-sm md:text-base font-medium leading-5 sm:leading-6 text-[#ADAFFA] font-roboto">{applicant.likes}</p>
            </div>
            {applicant.skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 sm:px-3 py-1 bg-[#2B2B31] rounded-full text-xs sm:text-sm font-medium leading-5 sm:leading-6 font-roboto text-[#E7E7E8]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Match Percentage */}
        <div className="w-full">
          <Progress match={applicant.match} />
        </div>
      </div>
    </Link>
  );
};

export default ApplicantCard;
