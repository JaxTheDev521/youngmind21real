
import React from 'react';
import { MOCK_RESOURCES } from '../constants';
import { User, UserRole } from '../types';

interface ResourcesPageProps {
  user: User;
}

const ResourcesPage: React.FC<ResourcesPageProps> = ({ user }) => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-midnight font-lexend mb-2">Resource Library</h1>
          <p className="text-gray-500">Essential tools, guides, and toolkits for your mini-state journey.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_RESOURCES.map(resource => {
            const hasAccess = user.role === UserRole.ADMIN || 
                             (resource.accessLevel === UserRole.MEMBER) || 
                             (resource.accessLevel === UserRole.PREMIUM && user.role === UserRole.PREMIUM);

            return (
              <div key={resource.id} className={`bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 transition-all ${hasAccess ? 'hover:shadow-xl hover:-translate-y-1' : 'opacity-75'}`}>
                <div className="h-40 bg-gray-100 flex items-center justify-center text-5xl relative">
                  {resource.type === 'PDF' ? '📄' : '🎥'}
                  {!hasAccess && (
                    <div className="absolute inset-0 bg-midnight/80 backdrop-blur-sm flex flex-col items-center justify-center text-white p-4">
                      <span className="text-3xl mb-2">🔒</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-gold">Premium Only</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-cyan">{resource.type}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{resource.accessLevel} Access</span>
                  </div>
                  <h3 className="text-lg font-bold text-midnight mb-4">{resource.title}</h3>
                  {hasAccess ? (
                    <button className="w-full py-3 bg-gray-50 text-midnight border border-gray-200 rounded-xl font-bold text-sm hover:bg-midnight hover:text-white transition-all">
                      Download Resource
                    </button>
                  ) : (
                    <button className="w-full py-3 bg-gold text-midnight rounded-xl font-bold text-sm hover:bg-white border border-gold transition-all">
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
