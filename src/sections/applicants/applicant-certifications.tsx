import { Card } from "@/components/common";
import { IApplicantDetails } from "@/types/applicants-types";
import Image from "next/image";

const ApplicantCertifications = ({ applicant }: { applicant: IApplicantDetails }) => {
  const certifications = applicant.customFields.filter(field => field.question === "Certifications");
  return (
    <Card>
        <div className="grid gap-4">
            <h3 className="text-base font-semibold text-white leading-7">
                Certifications
            </h3>
            {certifications.map((certification) => (
                <div key={certification.question} className="flex items-center gap-2 py-2 px-4 bg-[#2B2B31] rounded-[40px] max-w-max">
                    <Image src="/icons/tf.svg" alt="Certification 1" width={24} height={24} />
                    <div className="text-sm font-medium leading-6 font-roboto text-[#E7E7E8]">{certification.answers[0].text}</div>
                </div>
            ))}
        </div>
    </Card>
  )
};

export default ApplicantCertifications;