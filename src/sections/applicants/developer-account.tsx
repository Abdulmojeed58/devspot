import { Card } from "@/components/common";
import {
  CompanyIcon,
  DevIcon,
  GithubIcon,
  LinkedinIcon,
  StackoverflowIcon,
} from "@/components/icons";
import Image from "next/image";

const DeveloperAccount = () => {
  return (
    <Card>
      <div>
        <h3 className="text-base font-semibold text-white leading-7">
          Developer Accounts
        </h3>
        <div className="grid gap-4 mt-4">
          <DeveloperAccountItem icon={<LinkedinIcon />} title="LinkedIn" />
          <DeveloperAccountItem2
            icon={<GithubIcon />}
            title="GitHub"
            detail={[
              { label: "Public Repos", value: "12" },
              { label: "Followers", value: "12" },
              { label: "Following", value: "12" },
            ]}
          />
          <DeveloperAccountItem2
            icon={<StackoverflowIcon />}
            title="Stack Overflow"
            detail={[
              { label: "Badges", value: "25" },
              { label: "Upvotes", value: "5.2K" },
              { label: "Answers", value: "124" },
              { label: "Questions", value: "56" },
            ]}
          />
          <DeveloperAccountItem
            icon={<CompanyIcon />}
            title="HackerRank"
            detail={{ label: "Rank", value: "2560" }}
          />
          <DeveloperAccountItem
            icon={<Image src="/icons/hacker.svg" alt="HackerRank" width={24} height={24} />}
            title="Hacker Earth"
            detail={{ label: "Rank", value: "6640" }}
          />
          <DeveloperAccountItem
            icon={<DevIcon />}
            title="Dev.to"
            detail={{ label: "Articles", value: "25" }}
          />
        </div>
      </div>
    </Card>
  );
};

export default DeveloperAccount;

interface DeveloperAccountItemProps {
  icon: React.ReactNode;
  title: string;
  detail?: {
    label: string;
    value: string;
  };
}

const DeveloperAccountItem = ({
  icon,
  title,
  detail,
}: DeveloperAccountItemProps) => {
  return (
    <DeveloperAccountCard>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span>{icon}</span>
          <div>
            <p className="text-sm font-medium leading-5 text-dev-text-muted">
              {title}
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm font-medium leading-6 font-roboto text-white">
            {detail?.value}
          </p>
          <p className="text-xs font-medium leading-5 text-dev-text-muted">
            {detail?.label}
          </p>
        </div>
      </div>
    </DeveloperAccountCard>
  );
};

interface DeveloperAccountItem2Props {
  icon: React.ReactNode;
  title: string;
  detail: {
    label: string;
    value: string;
  }[];
}

const DeveloperAccountItem2 = ({
  icon,
  title,
  detail,
}: DeveloperAccountItem2Props) => {
  return (
    <DeveloperAccountCard>
      <div>
        <div className="flex items-center gap-4">
          <span>{icon}</span>
          <div>
            <p className="text-sm font-medium leading-5 text-dev-text-muted">
              {title}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center mt-4 divide-x-2 divide-dev-border gap-y-2">
          {detail.map((item) => (
            <div key={item.label} className="text-center px-3">
              <p className="text-sm font-medium leading-6 text-white font-roboto">
                {item.value}
              </p>
              <p className="text-xs font-medium leading-5 text-dev-text-muted font-roboto">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </DeveloperAccountCard>
  );
};

const DeveloperAccountCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-4 px-[20px] bg-[#2B2B31] rounded-[12px] border border-dev-border">
      {children}
    </div>
  );
};
