
import React from 'react';
import { Department, MicroworldEvent, Resource, UserRole } from './types';

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
    dateTime: 'Saturday, 10:00 AM',
    zoomLink: 'https://zoom.us/j/123456789',
    isPremium: false,
    category: 'Session'
  },
  {
    id: 'e2',
    title: 'Advanced Entrepreneurship Workshop',
    description: 'Learn how to pitch your ideas to the mini-state council.',
    dateTime: 'Wednesday, 4:00 PM',
    zoomLink: 'https://zoom.us/j/987654321',
    isPremium: true,
    category: 'Workshop'
  },
];

export const MOCK_RESOURCES: Resource[] = [
  { id: 'r1', title: 'Mini-State Constitution 101', type: 'PDF', accessLevel: UserRole.MEMBER },
  { id: 'r2', title: 'Entrepreneurship Toolkit', type: 'PDF', accessLevel: UserRole.PREMIUM },
  { id: 'r3', title: 'Public Speaking Basics', type: 'Video', accessLevel: UserRole.MEMBER },
];
