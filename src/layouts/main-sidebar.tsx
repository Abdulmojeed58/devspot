"use client";
import {
  AiIcon,
  TrendIcon,
  StarIcon,
  ClipboardBrokenIcon,
  PeopleIcon,
} from "@/components/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Chat with Spot", href: "/applicants", icon: <AiIcon /> },
  { label: "Overview", href: "", icon: <TrendIcon /> },
  { label: "Hackathons", href: "", icon: <StarIcon /> },
  { label: "Technology Profile", href: "", icon: <ClipboardBrokenIcon /> },
  { label: "Community", href: "", icon: <PeopleIcon /> },
];

const MainSidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="w-full md:w-[220px] bg-dev-card min-h-0 md:min-h-[calc(100vh-80px)]">
      <nav className="py-4 md:py-6 px-2 md:px-3">
        <ul className="space-y-3 md:space-y-[20px]">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`flex items-center gap-2 px-2 py-1 transition-colors border-l-2 text-sm md:text-base font-bold leading-5 font-raleway ${
                  pathname === item.href
                    ? "border-dev-primary text-white"
                    : "border-transparent text-dev-text-muted hover:text-white"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default MainSidebar;
