
import React from 'react';
import { MOCK_RESOURCES } from '../constants';
import { User, UserRole } from '../types';
import { FileText, Video, Lock, Zap, Download } from 'lucide-react';

interface ResourcesPageProps {
  user: User;
}

const ResourcesPage: React.FC<ResourcesPageProps> = ({ user }) => {
  return (
    <div className="bg-neutral-light min-h-screen py-24 px-4 relative overflow-hidden shadow-inner">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-orange/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-20 text-center animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-black text-midnight font-lexend mb-6 tracking-tight uppercase">Knowledge Vault</h1>
          <p className="text-xl lg:text-2xl text-gray-500 font-bold max-w-2xl mx-auto uppercase tracking-wide">Essential tools and guides for your leadership journey.</p>
          <div className="h-2 w-24 bg-secondary-pink mx-auto rounded-full mt-8 shadow-pink-glow" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {MOCK_RESOURCES.map((resource, i) => {
            const hasAccess = user.role === UserRole.ADMIN ||
              (resource.access_level === 'free') ||
              (resource.access_level === 'member') ||
              (resource.access_level === 'premium' && user.role === UserRole.PREMIUM);

            return (
              <div key={resource.id} className={`glass rounded-[3rem] overflow-hidden shadow-2xl border-white/50 transition-all duration-500 animate-fade-in ${hasAccess ? 'hover:shadow-orange-glow/10 hover:-translate-y-2 group' : 'opacity-60 grayscale-[0.5]'}`} style={{ animationDelay: `${i * 100}ms` }}>
                <div className="h-56 bg-neutral-light/50 flex items-center justify-center relative shadow-inner overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                  <div className="text-primary-orange transform group-hover:scale-110 transition-transform">
                    {resource.type === 'PDF' ? <FileText size={80} /> : <Video size={80} />}
                  </div>
                  {!hasAccess && (
                    <div className="absolute inset-0 bg-hero-gradient/80 backdrop-blur-md flex flex-col items-center justify-center text-white p-8">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 ring-4 ring-white/10">
                        <Lock size={32} className="text-highlight-yellow" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-highlight-yellow text-center">Premium Access Protocol Required</span>
                    </div>
                  )}
                  {hasAccess && <div className="absolute bottom-4 right-6 text-primary-orange opacity-0 group-hover:opacity-100 transition-opacity font-black"><Download size={24} /></div>}
                </div>
                <div className="p-8 lg:p-10">
                  <div className="flex justify-between items-center mb-6">
                    <span className="px-4 py-1.5 bg-primary-orange/10 text-primary-orange text-[10px] font-black rounded-lg uppercase tracking-[0.2em] border border-primary-orange/20">{resource.type}</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 italic">{resource.access_level} CHARTER</span>
                  </div>
                  <h3 className="text-2xl font-black text-midnight mb-8 font-lexend uppercase tracking-tight leading-tight group-hover:text-primary-orange transition-colors">{resource.title}</h3>
                  {hasAccess ? (
                    <button className="w-full py-5 bg-white text-midnight border-2 border-gray-100 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary-orange hover:text-white hover:border-primary-orange transition-all shadow-xl active:scale-95 group-hover:shadow-orange-glow/20">
                      Download Archive
                    </button>
                  ) : (
                    <button className="w-full flex items-center justify-center gap-3 py-5 bg-primary-orange text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-highlight-yellow hover:text-midnight transition-all shadow-2xl active:scale-95 shadow-orange-glow">
                      Unlock Full Access <Zap size={16} />
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
