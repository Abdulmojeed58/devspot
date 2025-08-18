import { Card } from "@/components/common";
import { IApplicantDetails } from "@/types/applicants-types";
import Image from "next/image";
import Link from "next/link";

const ApplicantCustomField = ({
  applicant,
}: {
  applicant: IApplicantDetails;
}) => {
  return (
    <Card>
      <div className="font-roboto">
        <h2 className="text-[18px] font-semibold leading-8 text-white mb-4">
          Custom Fields
        </h2>

        <div className="space-y-6">
          {applicant.customFields.map((field) => (
            <div
              key={field.question}
              className="border-b border-dev-border pb-6 last:border-b-0"
            >
              <div className="mb-3">
                <div>
                  <h3 className="text-white text-sm font-medium leading-6 mb-2">
                    {field.question}
                  </h3>
                  <p className="text-dev-text-muted text-sm leading-6 font-medium ">
                    {field.answers.map((answer) => answer.text).join(", ")}
                  </p>
                </div>

                <div className="grid gap-3 mt-4">
                  <div className="flex gap-3 items-center">
                    <Image
                      src={applicant.avatarUrl}
                      alt={applicant.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <p className="text-sm font-medium leading-6 text-white">
                      {field.answers[0].author}
                    </p>
                    <p className="uppercase text-xs font-medium leading-normal text-dev-text-muted">
                      {field.answers[0].date}
                    </p>
                  </div>

                  <p className="text-sm font-medium leading-6 text-white">
                    {field.answers[0].text}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <Link
                  href=""
                  className="text-[18px] font-semibold leading-[22px] text-white underline font-roboto text-right"
                >
                  Give feedback
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <button className="bg-[#4E52F5] text-white text-[18px] font-semibold font-roboto leading-[32px] py-1 px-4 rounded-[8px]">
            Get in touch with {applicant.name}
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ApplicantCustomField;
