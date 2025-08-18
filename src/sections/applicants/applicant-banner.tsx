import { Progress } from "@/components/common";
import { TokenIcon } from "@/components/icons";
import { IApplicantDetails } from "@/types/applicants-types";
import Image from "next/image";

const ApplicantBanner = ({ applicant }: { applicant: IApplicantDetails }) => {
  return (
    <div className="relative h-[300px] bg-banner bg-cover bg-center overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 px-[48px] py-[59.5px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[56px]">
            <Image
              src={applicant.avatar}
              alt={applicant.name}
              className="w-[156px] h-[156px] rounded-full"
              width={156}
              height={156}
            />
            <div className="flex flex-col gap-[14px] lg:min-w-[322px]">
              <p className="text-white text-base font-semibold leading-7 font-roboto">
                {applicant.role}
              </p>
              <h1 className="text-[40px] font-bold leading-normal font-raleway text-white">
                {applicant.name}
              </h1>
              <div className="flex items-center">
                <span className="px-4 py-2 bg-[#263513] text-[#91C152] text-sm font-medium leading-6 font-roboto rounded-full">
                  {applicant.status}
                </span>
              </div>
              <Progress match={applicant.matchPercentage} />
            </div>
          </div>

          <div className="text-right">
            <div className="text-white text-right">
              <div className="text-[32px] font-bold leading-normal font-raleway">
                Applicant #{applicant.id}
              </div>
              <div className="flex items-center justify-end gap-[12px]">
                <TokenIcon />
                <span className="text-[40px] font-bold leading-normal font-raleway">100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantBanner;
