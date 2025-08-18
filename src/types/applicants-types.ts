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
  developerAccounts: { provider: string; handle: string }[];
  skills: string[];
  customFields: {
    question: string;
    answers: { author: string; date: string; text: string }[];
  }[];
}

export type { IApplicant, IApplicantDetails };

