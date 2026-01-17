
export enum UserRole {
  GUEST = 'guest',
  MEMBER = 'member',
  PREMIUM = 'premium',
  ADMIN = 'admin',
  PARENT = 'parent'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  is_approved: boolean;
  stripe_customer_id?: string;
  membership_type?: string;
  linked_child_profiles?: string[]; // IDs of profiles
  department?: string;
  avatar?: string;
}

export interface Profile {
  id: string;
  user_id: string;
  child_name: string;
  age: number;
  grade: string;
  parent_name: string;
  parent_email: string;
  departments: string[];
  badges: string[];
  certificates: string[]; // File URLs
}

export interface MicroworldEvent {
  id: string;
  title: string;
  description: string;
  start_datetime: string;
  timezone: string;
  duration_minutes: number;
  zoom_meeting_id?: string;
  zoom_join_link?: string;
  is_premium: boolean;
  category: 'Session' | 'Election' | 'Workshop' | 'Competition';
  created_by: string; // User ID
}

export interface Department {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: any; // Changed from string to any to support Lucide components
}

export interface Election {
  id: string;
  title: string;
  department: string;
  is_active: boolean;
  voting_deadline: string;
  candidates: Candidate[];
}

export interface Candidate {
  id: string;
  profile_id: string;
  name: string;
  manifesto: string;
  vote_count: number;
}

export interface Vote {
  id: string;
  voter_id: string;
  candidate_id: string;
  election_id: string;
  payment_reference?: string;
  timestamp: string;
}

export interface Resource {
  id: string;
  title: string;
  file_url: string;
  type: 'PDF' | 'Video' | 'Link';
  access_level: 'free' | 'member' | 'premium';
  thumbnail?: string;
}

export interface MembershipType {
  id: string;
  name: string;
  price: number;
  stripe_price_id: string;
  benefits: string[];
  is_premium: boolean;
}

export interface Announcement {
  id: string;
  title: string;
  message: string;
  audience: 'all' | 'members' | 'premium' | 'parents';
  created_date: string;
}
