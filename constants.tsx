
import React from 'react';
import { Department, MicroworldEvent, Resource, UserRole, MembershipType } from './types';

export const DEPARTMENTS: Department[] = [
  { id: '1', name: 'Commerce & Trade', description: 'Mastering the marketplace and entrepreneurship.', color: 'bg-primary-orange', icon: '💰' },
  { id: '2', name: 'Justice & Ethics', description: 'Upholding values and resolving conflicts.', color: 'bg-secondary-pink', icon: '⚖️' },
  { id: '3', name: 'Innovation & Tech', description: 'Building the future with digital skills.', color: 'bg-highlight-yellow', icon: '🚀' },
  { id: '4', name: 'Arts & Culture', description: 'Creative expression and community building.', color: 'bg-secondary-pink', icon: '🎨' },
];

export const MOCK_EVENTS: MicroworldEvent[] = [
  {
    id: 'e1',
    title: 'Weekly Leadership Session',
    description: 'Join us for our signature weekly gathering where we discuss the weeks mini-state progress.',
    start_datetime: '2026-01-17T10:00:00Z',
    zoom_meeting_id: '123456789',
    zoom_join_link: 'https://zoom.us/j/123456789',
    is_premium: false,
    category: 'Session',
    created_by: 'admin-1'
  },
  {
    id: 'e2',
    title: 'Advanced Entrepreneurship Workshop',
    description: 'Learn how to pitch your ideas to the mini-state council.',
    start_datetime: '2026-01-21T16:00:00Z',
    zoom_meeting_id: '987654321',
    zoom_join_link: 'https://zoom.us/j/987654321',
    is_premium: true,
    category: 'Workshop',
    created_by: 'admin-1'
  },
];

export const MOCK_RESOURCES: Resource[] = [
  { id: 'r1', title: 'Mini-State Constitution 101', file_url: '/files/constitution.pdf', type: 'PDF', access_level: 'member' },
  { id: 'r2', title: 'Entrepreneurship Toolkit', file_url: '/files/toolkit.pdf', type: 'PDF', access_level: 'premium' },
  { id: 'r3', title: 'Public Speaking Basics', file_url: 'https://youtube.com/watch?v=123', type: 'Video', access_level: 'member' },
];

export const MEMBERSHIP_TYPES: MembershipType[] = [
  {
    id: 'm1',
    name: 'Free Citizen',
    price: 0,
    stripe_price_id: 'price_free',
    benefits: ['Access to basic resources', 'View public events', 'Basic dashboard'],
    is_premium: false
  },
  {
    id: 'm2',
    name: 'Premium Leader',
    price: 50,
    stripe_price_id: 'price_premium',
    benefits: ['Full Resource Library', 'Zoom Links for All Events', 'Priority Support', 'Exclusive Workshops'],
    is_premium: true
  }
];
