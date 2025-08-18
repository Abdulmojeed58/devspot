import { Card } from "@/components/common";

const technologies = [
  "Python",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
];

const skills = [
  "iOS Development",
  "Android Development",
  "Flutter",
  "React Native",
  "Swift",
  "Kotlin",
  "Java",
];

const ApplicantSkills = () => {
  return (
    <Card>
      <div className="grid gap-4">
        <h3 className="text-base font-semibold text-white leading-7">Skills</h3>
        <div>
          <h4 className="text-sm font-medium leading-6 font-roboto text-dev-text-muted">Experience</h4>
          <div className="flex flex-wrap gap-4 mt-4">
            {skills.map((skill) => (
              <div 
                key={skill}
                className="py-2 px-4 bg-[#2B2B31] rounded-[40px] max-w-max"
              >
                <div className="text-sm font-medium leading-6 font-roboto text-[#E7E7E8]">
                  TensorFlow Developer
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
                key={technology}
                className="py-2 px-4 bg-[#2B2B31] rounded-[40px] max-w-max"
              >
                <div className="text-sm font-medium leading-6 font-roboto text-[#E7E7E8]">
                  {technology}
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
