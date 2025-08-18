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
              key={field.id}
              className="border-b border-dev-border pb-6 last:border-b-0"
            >
              <div className="mb-3">
                <div>
                  <h3 className="text-white text-sm font-medium leading-6 mb-2">
                    {field.question}
                  </h3>
                  <p className="text-dev-text-muted text-sm leading-6 font-medium ">
                    {field.answer}
                  </p>
                </div>

                <div className="grid gap-3 mt-4">
                  <div className="flex gap-3 items-center">
                    <Image
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces"
                      alt="User"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <p className="text-sm font-medium leading-6 text-white">
                      Name
                    </p>
                    <p className="uppercase text-xs font-medium leading-normal text-dev-text-muted">
                      May 21, 2020 @ 1:00pm
                    </p>
                  </div>

                  <p className="text-sm font-medium leading-6 text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quos.
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
            Get in touch with Austin
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ApplicantCustomField;
