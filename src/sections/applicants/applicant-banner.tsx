import { Progress } from "@/components/common";
import { TokenIcon } from "@/components/icons";
import { IApplicantDetails } from "@/types/applicants-types";
import Image from "next/image";

const ApplicantBanner = ({ applicant, openToWork, openToProjects }: { applicant: IApplicantDetails, openToWork: boolean, openToProjects: boolean }) => {
  return (
    <div className="relative min-h-[180px] sm:min-h-[220px] md:min-h-[260px] lg:min-h-[300px] bg-banner bg-cover bg-center">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 px-4 sm:px-8 md:px-[48px] py-6 sm:py-10 md:py-[59.5px] flex flex-col justify-center w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 lg:gap-0 w-full">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-[56px] w-full lg:w-auto">
            <Image
              src={applicant.avatarUrl}
              alt={applicant.name}
              className="w-20 h-20 sm:w-[120px] sm:h-[120px] md:w-[156px] md:h-[156px] rounded-full"
              width={156}
              height={156}
            />
            <div className="flex flex-col gap-2 sm:gap-[14px] items-center sm:items-start w-full lg:min-w-[322px]">
              <p className="text-white text-sm sm:text-base font-semibold leading-6 sm:leading-7 font-roboto">
                {applicant.title}
              </p>
              <h1 className="text-xl sm:text-3xl md:text-[40px] font-bold leading-normal font-raleway text-white break-words text-center sm:text-left">
                {applicant.name}
              </h1>
              <div className="flex items-center justify-center gap-2 sm:justify-start w-full">
                {openToWork && <span className="px-3 sm:px-4 py-1 sm:py-2 bg-[#263513] text-[#91C152] text-xs sm:text-sm font-medium leading-5 sm:leading-6 font-roboto rounded-full">
                  Open to work
                </span>}
                {openToProjects && <span className="px-3 sm:px-4 py-1 sm:py-2 bg-[#263513] text-[#91C152] text-xs sm:text-sm font-medium leading-5 sm:leading-6 font-roboto rounded-full">
                  Open to projects
                </span>}
              </div>
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                <Progress match={applicant.match} />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end text-center lg:text-right mt-4 lg:mt-0 w-full lg:w-auto lg:h-full">
            <div className="text-white flex flex-col lg:items-end lg:justify-between lg:gap-20">
              <div className="text-lg sm:text-2xl md:text-[32px] font-bold leading-normal font-raleway">
                Applicant #{applicant.applicantId}
              </div>
              <div className="flex items-center justify-center lg:justify-end gap-2 sm:gap-[12px] mt-2 lg:mt-0">
                <TokenIcon />
                <span className="text-xl sm:text-3xl md:text-[40px] font-bold leading-normal font-raleway">100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantBanner;
