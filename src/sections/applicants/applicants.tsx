"use client";

import { IApplicant } from "@/types/applicants-types";
import { ApplicantCard } from "@/components/common";

const applicants: IApplicant[] = [
  {
    id: "1",
    name: "Olive James",
    title: "Senior Developer",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces",
    status: "Rejected",
    match: 76,
    location: "San Francisco, United States",
    likes: 203,
    skills: ["React", "C#", "Skill", "+2 more"],
    decision: "rejected"
  },
  {
    id: "2",
    name: "Ola Hopkins",
    title: "Software Engineer",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces",
    status: "Accepted",
    match: 76,
    location: "San Francisco, United States",
    likes: 203,
    skills: ["React", "Ruby", "Skill", "+1 more"],
    decision: "accepted"
  },
  {
    id: "3",
    name: "Randall Swanson",
    title: "Senior Designer",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces",
    status: "Accepted",
    match: 76,
    location: "Los Angeles",
    likes: 203,
    skills: ["Adobe"],
    decision: "accepted"
  },
  {
    id: "4",
    name: "Henry Edwards",
    title: "Lead Developer",
    avatarUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=faces",
    status: "Accepted",
    match: 76,
    location: "Seattle",
    likes: 203,
    skills: ["C#"],
    decision: "accepted"
  },
  {
    id: "5",
    name: "Nancy Duncan",
    title: "Senior Software Engineer",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
    status: "Pending",
    match: 76,
    location: "Austin",
    likes: 203,
    skills: ["Java", "Skill", "+2 more"],
    decision: "pending"
  },
  {
    id: "6",
    name: "Rosetta Alvarez",
    title: "Lead Developer",
    avatarUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=faces",
    status: "Pending",
    match: 76,
    location: "Miami",
    likes: 203,
    skills: ["PHP", "React", "Skill", "+4 more"],
    decision: "pending"
  },
  {
    id: "7",
    name: "Zachary Murray",
    title: "Developer",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    status: "Rejected",
    match: 76,
    location: "Chicago",
    likes: 203,
    skills: ["JavaScript", "Python", "Skill"],
    decision: "rejected"
  },
  {
    id: "8",
    name: "Kate Brock",
    title: "Associate Developer",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces",
    status: "Accepted",
    match: 76,
    location: "Boston",
    likes: 203,
    skills: ["Python"],
    decision: "accepted"
  },
  {
    id: "9",
    name: "Elmer Robinson",
    title: "Associate Developer",
    avatarUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=faces",
    status: "Accepted",
    match: 76,
    location: "Portland",
    likes: 203,
    skills: ["PHP", "Java", "Skill", "+3 more"],
    decision: "accepted"
  }
];

export default function Applicants() {
  return (
      <div className="p-4 md:ml-[60px] lg:ml-[70px] xl:ml-[82px] pb-0 min-h-[calc(100vh-5rem)]">
        <div className="flex items-center justify-between mb-11 mt-10">
          <h1 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-white font-raleway">Applicants</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[40px] gap-y-[56px]">
          {applicants.map((applicant) => (
            <ApplicantCard key={applicant.id} applicant={applicant} />
          ))}
        </div>
      </div>
  );
}
