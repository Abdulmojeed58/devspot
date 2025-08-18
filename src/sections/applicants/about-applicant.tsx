import { Card } from "@/components/common";
import { CalendarIcon, MapPinIcon } from "@/components/icons";
import LinkIcon from "@/components/icons/link-icon";
import { IApplicantDetails } from "@/types/applicants-types";
import Link from "next/link";

const AboutApplicant = ({ applicant }: { applicant: IApplicantDetails }) => {
  return (
    <Card>
      <div className="flex flex-col gap-4 font-roboto">
        <h3 className="text-base font-semibold text-white leading-7">About</h3>
        <p className="text-dev-text-muted text-sm font-semibold leading-6">
          {applicant.about}
        </p>
        <div>
          <div className="flex items-center gap-4 py-[20px] text-sm border-t-[2px] border-dev-border">
            <div className="p-1">
              <MapPinIcon />
            </div>
            <span className="text-dev-text-muted">{applicant.location}</span>
          </div>
          <div className="flex items-center gap-4 py-[20px] text-sm border-t-[2px] border-dev-border">
            <div className="p-1">
              <CalendarIcon />
            </div>
            <span className="text-dev-text-muted">{applicant.experience}</span>
          </div>
          <div className="flex items-center gap-4 py-[20px] text-sm border-t-[2px] border-dev-border">
            <div className="p-1">
              <LinkIcon />
            </div>
            <Link href="" className="text-dev-text-muted underline">
              {applicant.website}
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AboutApplicant;
