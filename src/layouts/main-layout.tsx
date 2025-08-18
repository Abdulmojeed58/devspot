"use client";
import { ReactNode } from "react";
import MainSidebar from "./main-sidebar";
import { ArrowDownIcon, BellIcon, PlusIcon, SearchIcon } from "@/components/icons";
import { Logo } from "@/components/common";
import Footer from "./footer";
import { usePathname } from "next/navigation";
import ApplicantSidebar from "./applicant-sidebar";
import Image from "next/image";

interface LayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  const pathname = usePathname();
  const isApplicantsPage = pathname === "/applicants";

  return (
    <div>
      {/* Header */}
      <header className="sticky top-0 left-0 right-0 z-30 h-[76px] border-b border-dev-border bg-dev-card">
        <div className="flex items-center px-4 py-[10px] h-[76px]">
          {/* Logo */}
          <div className="flex items-center space-x-2 mr-32">
            <Logo />
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-[525px] mx-8 h-full">
            <div className="relative h-full">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dev-text-muted w-4 h-4" />
              <input
                type="text"
                placeholder="Search for hackathons, companies, developers, events and discussions"
                className="w-full bg-[#2B2B31] border border-[#424248] rounded-[12px] pl-10 pr-4 py-2 text-dev-text placeholder-dev-text-muted focus:outline-none focus:ring-2 focus:ring-dev-primary text-sm font-medium leading-6 h-full"
              />
            </div>
          </div>

          {isApplicantsPage ? (
            <div className="flex space-x-4 ml-auto h-full font-roboto">
              <button className="px-4 py-2 bg-dev-primary text-white rounded-lg hover:bg-blue-600 transition-colors text-lg font-semibold leading-8">
                Log in
              </button>
              <button className="px-4 py-2 border border-dev-border text-white rounded-lg hover:bg-dev-card-hover transition-colors flex items-center gap-2 bg-color-gradient-purple-blue">
                <PlusIcon />{" "}
                <span className="text-lg font-semibold leading-8">
                  Host a hackathon
                </span>
              </button>
            </div>
          ) : (
            // {/* Right Actions */}
            <div className="flex items-center ml-auto gap-6">
              <button className="text-dev-text-muted hover:text-dev-text">
                <BellIcon />
              </button>

              <div className="flex items-center px-3 min-w-[336px]">
                <div className="w-8 h-8 bg-dev-card rounded-full flex items-center justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces"
                    alt="name"
                    className="rounded-full object-cover"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="flex flex-col ml-3">
                  <span className="text-white text-[18px] font-semibold leading-8">Russell French</span>
                  <span className="text-sm font-medium leading-6 text-dev-text-muted">Senior Developer</span>
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
        {/* Sidebar */}
        <div className="top-20 left-0 z-20 h-[calc(100vh-5rem)] w-[220px]">
          {isApplicantsPage ? <MainSidebar /> : <ApplicantSidebar />}
        </div>
        {/* Main Content */}
        <main className="flex-1 h-[calc(100vh-5rem)] bg-dev-bg relative">
          <div className="overflow-y-auto h-full">
            {children}

            {/* Footer */}
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
