"use client";
import { ReactNode } from "react";
import MainSidebar from "./main-sidebar";
import { ArrowDownIcon, BellIcon, PlusIcon, SearchIcon, UserIcon } from "@/components/icons";
import { Logo, Button } from "@/components/common";
import Footer from "./footer";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ApplicantSidebar from "./applicant-sidebar";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { IApplicantDetails } from "@/types/applicants-types";

interface LayoutProps {
  children: ReactNode;
  applicant?: IApplicantDetails | null;
}

export default function MainLayout({ children, applicant }: LayoutProps) {
  const pathname = usePathname();
  const isApplicantsPage = pathname === "/applicants";
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Update local state if URL changes (e.g., back/forward navigation)
  useEffect(() => {
    setSearch(searchParams.get("q") || "");
  }, [searchParams]);

  // Debounced update of URL query param
  const onSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const params = new URLSearchParams(Array.from(searchParams.entries()));
      if (value) {
        params.set("q", value);
      } else {
        params.delete("q");
      }
      router.replace(`${pathname}?${params.toString()}`);
    }, 400);
  }, [router, pathname, searchParams]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 left-0 right-0 z-30 h-[64px] md:h-[76px] border-b border-dev-border bg-dev-card flex-shrink-0">
        <div className="flex items-center px-4 py-2 md:py-[10px] h-[64px] md:h-[76px]">
          {/* Hamburger or Close for mobile */}
          <button
            className="md:hidden mr-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-dev-primary"
            aria-label={sidebarOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? (
              // X icon
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <line x1="6" y1="6" x2="18" y2="18" stroke="#E7E7E8" strokeWidth="2" strokeLinecap="round" />
                <line x1="18" y1="6" x2="6" y2="18" stroke="#E7E7E8" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              // Hamburger icon
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <rect y="5" width="24" height="2" rx="1" fill="#E7E7E8" />
                <rect y="11" width="24" height="2" rx="1" fill="#E7E7E8" />
                <rect y="17" width="24" height="2" rx="1" fill="#E7E7E8" />
              </svg>
            )}
          </button>
          {/* Logo */}
          <div className={`flex items-center space-x-2 mr-4 ${isApplicantsPage ? 'md:mr-[153px]' : 'md:mr-24'}`}>
            <Logo />
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-full md:max-w-[525px] mx-2 md:mx-8 h-full">
            <div className="relative h-full">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dev-text-muted w-4 h-4" />
              <input
                type="text"
                value={search}
                onChange={onSearchChange}
                placeholder="Search for hackathons, companies, developers, events and discussions"
                className="w-full bg-[#2B2B31] border border-[#424248] rounded-[12px] pl-10 pr-4 py-2 text-dev-text placeholder-dev-text-muted focus:outline-none focus:ring-1 focus:ring-dev-primary text-sm font-medium leading-6 h-full"
              />
            </div>
          </div>

          {isApplicantsPage ? (
            <div className="hidden sm:flex space-x-2 md:space-x-4 ml-auto h-full font-roboto">
              <Button variant="primary" size="md">
                Log in
              </Button>
              <Button variant="gradient" size="md">
                <PlusIcon />
                <span className="text-base md:text-lg font-semibold leading-8">
                  Host a hackathon
                </span>
              </Button>
            </div>
          ) : (
            // {/* Right Actions */}
            <div className="flex items-center ml-auto gap-3 md:gap-6">
              <button className="text-dev-text-muted hover:text-dev-text">
                <BellIcon />
              </button>

              <div className="hidden sm:flex items-center px-2 md:px-3 min-w-[120px] md:min-w-[336px]">
                <div className="w-8 h-8 bg-dev-card rounded-full flex items-center justify-center">
                 {applicant?.avatarUrl ? <Image
                    src={applicant?.avatarUrl}
                    alt={applicant?.name || "name"}
                    className="rounded-full object-cover"
                    width={48}
                    height={48}
                  /> : <UserIcon />}
                </div>
                <div className="flex flex-col ml-2 md:ml-3">
                  <span className="text-white text-[16px] md:text-[18px] font-semibold leading-8">{applicant?.name || "--"}</span>
                  <span className="text-xs md:text-sm font-medium leading-6 text-dev-text-muted">{applicant?.title || "--"}</span>
                </div>
                <button className="ml-auto">
                  <ArrowDownIcon />
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Sidebar + Main Content */}
      <div className="flex h-[calc(100vh-5rem)] overflow-hidden">
        {/* Sidebar for desktop */}
        <div className="top-20 left-0 z-20 h-[calc(100vh-5rem)] w-[220px] hidden md:block">
          {isApplicantsPage ? <MainSidebar /> : <ApplicantSidebar />}
        </div>
        {/* Sidebar for mobile */}
        <div
          className={`fixed left-0 right-0 top-[64px] md:top-[76px] z-40 bg-black bg-opacity-40 transition-opacity duration-200 md:hidden ${sidebarOpen ? 'block' : 'hidden'}`}
          style={{ height: 'calc(100vh - 64px)' }}
          onClick={() => setSidebarOpen(false)}
          aria-hidden={!sidebarOpen}
        >
          <div
            className={`absolute top-0 left-0 h-full w-[220px] bg-dev-card shadow-lg transition-transform duration-200 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
            onClick={e => e.stopPropagation()}
          >
            {/* Removed close button from inside sidebar */}
            {isApplicantsPage ? <MainSidebar /> : <ApplicantSidebar />}
          </div>
        </div>
        {/* Main Content */}
        <main className="flex-1 h-[calc(100vh-5rem)] bg-dev-bg relative">
          <div className="overflow-y-auto h-full">
            {children}
            {/* Footer */}
            <Footer isApplicantsPage={isApplicantsPage} />
          </div>
        </main>
      </div>
    </div>
  );
}
