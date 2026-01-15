
import React from 'react';
import { MOCK_RESOURCES } from '../constants';
import { User, UserRole } from '../types';

interface ResourcesPageProps {
  user: User;
}

const ResourcesPage: React.FC<ResourcesPageProps> = ({ user }) => {
  return (
    <div className="bg-neutral-light min-h-screen py-12 px-4 shadow-inner">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-midnight font-lexend mb-2">Resource Library</h1>
          <p className="text-gray-500">Essential tools, guides, and toolkits for your mini-state journey.</p>
          <div className="h-1.5 w-24 bg-primary-orange rounded-full mt-6" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_RESOURCES.map(resource => {
            const hasAccess = user.role === UserRole.ADMIN ||
              (resource.accessLevel === UserRole.MEMBER) ||
              (resource.accessLevel === UserRole.PREMIUM && user.role === UserRole.PREMIUM);

            return (
              <div key={resource.id} className={`bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 transition-all ${hasAccess ? 'hover:shadow-pink-glow hover:-translate-y-1' : 'opacity-75'}`}>
                <div className="h-40 bg-neutral-light flex items-center justify-center text-5xl relative">
                  {resource.type === 'PDF' ? '📄' : '🎥'}
                  {!hasAccess && (
                    <div className="absolute inset-0 bg-hero-gradient/90 backdrop-blur-sm flex flex-col items-center justify-center text-white p-4">
                      <span className="text-3xl mb-2">🔒</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-highlight-yellow">Premium Only</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary-orange">{resource.type}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{resource.accessLevel} Access</span>
                  </div>
                  <h3 className="text-lg font-bold text-midnight mb-4 font-lexend">{resource.title}</h3>
                  {hasAccess ? (
                    <button className="w-full py-3 bg-gray-50 text-midnight border border-gray-100 rounded-xl font-bold text-sm hover:bg-secondary-pink hover:text-white transition-all shadow-sm">
                      Download Resource
                    </button>
                  ) : (
                    <button className="w-full py-3 bg-primary-orange text-white rounded-xl font-bold text-sm hover:scale-[1.02] transform transition-all shadow-orange-glow">
                      Upgrade to Unlock
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
