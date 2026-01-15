
import React from 'react';
import { MOCK_EVENTS } from '../constants';
import { User, UserRole } from '../types';

interface EventsPageProps {
  user: User;
}

const EventsPage: React.FC<EventsPageProps> = ({ user }) => {
  return (
    <div className="bg-neutral-light min-h-screen py-12 px-4 shadow-inner">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-midnight font-lexend mb-4">Virtual Events & Sessions</h1>
          <p className="text-gray-600">Connect with fellow mini-citizens and grow your world.</p>
          <div className="h-1.5 w-24 bg-primary-orange mx-auto rounded-full mt-6" />
        </header>

        <div className="space-y-6">
          {MOCK_EVENTS.map(event => (
            <div key={event.id} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center gap-8 group hover:shadow-pink-glow transition-all">
              <div className="md:w-1/4">
                <div className={`aspect-square rounded-2xl flex items-center justify-center text-5xl bg-neutral-light border border-gray-100 transition-transform group-hover:scale-105`}>
                  {event.category === 'Session' ? '🗣️' : '🎓'}
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 bg-secondary-pink/10 text-secondary-pink text-xs font-bold rounded-full uppercase tracking-wider">{event.category}</span>
                  {event.isPremium && <span className="px-3 py-1 bg-highlight-yellow/20 text-primary-orange text-xs font-bold rounded-full uppercase tracking-wider">Premium Only</span>}
                </div>
                <h3 className="text-2xl font-bold text-midnight mb-2 font-lexend">{event.title}</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">{event.description}</p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <svg className="w-5 h-5 text-secondary-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.dateTime}
                  </div>
                </div>
              </div>
              <div className="md:w-1/5 text-right">
                {event.isPremium && user.role !== UserRole.PREMIUM ? (
                  <button className="w-full bg-gray-100 text-gray-400 cursor-not-allowed py-3 rounded-xl font-bold text-sm">Upgrade Required</button>
                ) : (
                  <a
                    href={event.zoomLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-primary-orange text-white hover:bg-highlight-yellow hover:text-midnight py-4 rounded-xl font-bold transition-all shadow-lg active:scale-95 shadow-orange-glow"
                  >
                    Enter Room
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-10 text-center border-2 border-dashed border-gray-200">
          <h3 className="text-xl font-bold text-gray-400 mb-4 font-lexend">Host your own event?</h3>
          <p className="text-sm text-gray-400 max-w-sm mx-auto mb-6">Eligible Citizens (Level 5+) can request to host a department workshop.</p>
          <button className="text-gray-400 font-bold hover:text-midnight transition-colors">Apply for Hosting Status →</button>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
