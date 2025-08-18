import { Card } from "@/components/common";
import { IApplicantDetails } from "@/types/applicants-types";

const ApplicantSkills = ({ applicant }: { applicant: IApplicantDetails }) => {
  const skills = applicant.customFields.filter(field => field.question === "Skills");
  const technologies = applicant.customFields.filter(field => field.question === "Technologies");
  return (
    <Card>
      <div className="grid gap-4">
        <h3 className="text-base font-semibold text-white leading-7">Skills</h3>
        <div>
          <h4 className="text-sm font-medium leading-6 font-roboto text-dev-text-muted">Experience</h4>
          <div className="flex flex-wrap gap-4 mt-4">
            {skills.map((skill) => (
              <div 
                key={skill.question}
                className="py-2 px-4 bg-[#2B2B31] rounded-[40px] max-w-max"
              >
                <div className="text-sm font-medium leading-6 font-roboto text-[#E7E7E8]">
                    {skill.answers.map((answer) => answer.text).join(", ")} 
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-b-[2px] border-dev-border" />
        <div>
          <h4 className="text-sm font-medium leading-6 font-roboto text-dev-text-muted">Technologies</h4>
          <div className="flex flex-wrap gap-4 mt-4">
            {technologies.map((technology) => (
              <div
                key={technology.answers[0].text}
                className="py-2 px-4 bg-[#2B2B31] rounded-[40px] max-w-max"
              >
                <div className="text-sm font-medium leading-6 font-roboto text-[#E7E7E8]">
                  {technology.answers[0].text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ApplicantSkills;
