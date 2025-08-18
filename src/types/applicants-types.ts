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
  role: string;
  avatar: string;
  status: string;
  matchPercentage: number;
  location: string;
  experience: string;
  website: string;
  about: string;
  skills: string[];
  customFields: {
      id: number;
      question: string;
      answer: string;
      date: string;
  }[];
}

export type { IApplicant, IApplicantDetails };
