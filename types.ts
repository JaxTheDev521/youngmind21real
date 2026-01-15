
export enum UserRole {
  GUEST = 'guest',
  MEMBER = 'member',
  PREMIUM = 'premium',
  ADMIN = 'admin'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department?: string;
  avatar?: string;
}

export interface MicroworldEvent {
  id: string;
  title: string;
  description: string;
  dateTime: string;
  zoomLink: string;
  isPremium: boolean;
  category: 'Session' | 'Election' | 'Workshop' | 'Competition';
}

export interface Resource {
  id: string;
  title: string;
  type: 'PDF' | 'Video' | 'Link';
  accessLevel: UserRole;
  thumbnail?: string;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
}

export interface Election {
  id: string;
  title: string;
  status: 'Open' | 'Closed' | 'Upcoming';
  candidates: Candidate[];
}

export interface Candidate {
  id: string;
  name: string;
  slogan: string;
  votes: number;
}
