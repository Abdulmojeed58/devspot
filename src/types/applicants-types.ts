interface IApplicant {
  id: string;
  name: string;
  title: string;
  location: string;
  status: string;
  match: number;
  avatarUrl: string;
  likes: number;
  skills: string[];
  decision: "none" | "accepted" | "pending" | "rejected";
}

interface IApplicantDetails {
  id: string;
  applicantId: number;
  name: string;
  title: string;
  match: number;
  avatarUrl: string;
  openToWork: boolean;
  openToProjects: boolean;
  about: string;
  location: string;
  yearsExperience: number;
  website: string;
  developerAccounts: {
    provider: string;
    handle: string;
    details?: { label: string; value: string }[];
  }[];
  skills: string[];
  technologies: string[];
  certifications?: string[];
  customFields: {
    question: string;
    description: string;
    answers: {
      author: string;
      date: string;
      text: string;
      avatarUrl: string;
    }[];
  }[];
}

export type { IApplicant, IApplicantDetails };
