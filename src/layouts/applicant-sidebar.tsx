import { BountyIcon, BriefcaseIcon, DiscoverIcon, PeopleIcon, ProjectIcon, StarIcon, WalletIcon } from "@/components/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Discover", href: "", icon: <DiscoverIcon /> },
  { label: "Hackathons", href: "", icon: <StarIcon /> },
  { label: "People", href: "", icon: <PeopleIcon /> },
  { label: "Bounties", href: "", icon: <BountyIcon /> },
  { label: "Projects", href: "", icon: <ProjectIcon /> },
  { label: "Companies", href: "", icon: <BriefcaseIcon /> },
  { label: "Wallet", href: "", icon: <WalletIcon /> },
];

const ApplicantSidebar = () => {
  const pathname = usePathname();
  return (<aside className="w-[220px] bg-dev-card min-h-[calc(100vh-80px)]">
    <nav className="py-3">
      <ul className="space-y-[20px]">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className={`flex items-center gap-[20px] px-6 py-3 transition-colors ${
                pathname === item.href
                  ? "border-dev-primary text-white"
                  : "border-transparent text-dev-text-muted hover:text-white"
              }`}
            >
              {item.icon}
              <span className="text-base font-bold leading-normal font-raleway">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </aside>);
};

export default ApplicantSidebar;