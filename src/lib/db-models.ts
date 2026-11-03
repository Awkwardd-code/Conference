export interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  role: "user" | "admin";
  institution: string;
  createdAt: Date;
}

export interface Conference {
  id: string;
  title: string;
  slug: string;
  startDate: Date;
  endDate: Date;
  country: string;
  city: string;
  category: string;
  callForPaperUrl: string;
  paperSubmissionUrl: string;
  description: string;
}

export interface Submission {
  id: string;
  userId: string;
  conferenceId: string;
  title: string;
  abstract: string;
  fileUrl: string;
  status: "pending" | "accepted" | "rejected";
}

export interface Registration {
  id: string;
  userId: string;
  conferenceId: string;
  status: string;
}

export interface CommitteeMember {
  id: string;
  name: string;
  title: string;
  institution: string;
  country: string;
  imageUrl: string;
  role: string;
}

export interface Journal {
  id: string;
  title: string;
  issn: string;
  eIssn: string;
  indexedIn: string[];
  category: string;
  submitUrl: string;
}
