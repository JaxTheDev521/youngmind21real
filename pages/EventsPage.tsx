
import React from 'react';
import { MOCK_EVENTS } from '../constants';
import { User, UserRole } from '../types';

interface EventsPageProps {
  user: User;
}

const EventsPage: React.FC<EventsPageProps> = ({ user }) => {
  return (
    <div className="bg-neutral-light min-h-screen py-24 px-4 relative overflow-hidden shadow-inner">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary-pink/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        <header className="mb-20 text-center animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-black text-midnight font-lexend mb-6 tracking-tight uppercase">Sovereign Sessions</h1>
          <p className="text-xl lg:text-2xl text-gray-500 font-bold max-w-2xl mx-auto uppercase tracking-wide">Connect with fellow leaders and grow your world.</p>
          <div className="h-2 w-24 bg-primary-orange mx-auto rounded-full mt-8 shadow-orange-glow" />
        </header>

        <div className="space-y-10">
          {MOCK_EVENTS.map((event, i) => (
            <div key={event.id} className="glass rounded-[3rem] p-10 md:p-14 shadow-2xl border-white/50 flex flex-col lg:flex-row items-center gap-12 group hover:-translate-y-1 transition-all duration-500 hover:shadow-orange-glow/10 animate-fade-in" style={{ animationDelay: `${i * 150}ms` }}>
              <div className="lg:w-1/4 w-full">
                <div className={`aspect-square rounded-[2.5rem] flex items-center justify-center text-7xl bg-neutral-light shadow-inner border-2 border-white transform group-hover:rotate-6 transition-all duration-500`}>
                  {event.category === 'Session' ? '🎙️' : '🎓'}
                </div>
              </div>
              <div className="flex-grow text-center lg:text-left">
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
                  <span className="px-5 py-2 bg-secondary-pink/10 text-secondary-pink text-[10px] font-black rounded-full uppercase tracking-[0.2em] border border-secondary-pink/20">{event.category}</span>
                  {event.is_premium && <span className="px-5 py-2 bg-highlight-yellow/20 text-primary-orange text-[10px] font-black rounded-full uppercase tracking-[0.2em] border border-highlight-yellow/30 shadow-orange-glow/10">Premium Protocol</span>}
                </div>
                <h3 className="text-3xl lg:text-4xl font-black text-midnight mb-4 font-lexend uppercase tracking-tight group-hover:text-primary-orange transition-colors">{event.title}</h3>
                <p className="text-lg text-gray-500 mb-8 leading-relaxed font-bold italic">{event.description}</p>
                <div className="flex items-center justify-center lg:justify-start gap-3 text-sm font-black text-gray-400 uppercase tracking-widest bg-white/40 w-fit px-6 py-3 rounded-2xl mx-auto lg:mx-0 border border-white/50">
                  <span className="text-secondary-pink">●</span>
                  {new Date(event.start_datetime).toLocaleDateString([], { weekday: 'long', hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
              <div className="lg:w-1/4 w-full text-center lg:text-right">
                {event.is_premium && user.role !== UserRole.PREMIUM ? (
                  <button className="w-full bg-white/50 border-2 border-gray-100 text-gray-300 py-6 rounded-2xl font-black text-xs uppercase tracking-widest cursor-not-allowed">Upgrade Required</button>
                ) : (
                  <a
                    href={event.zoom_join_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-primary-orange text-white hover:bg-highlight-yellow hover:text-midnight py-6 rounded-2xl font-black text-lg transition-all shadow-2xl active:scale-95 shadow-orange-glow uppercase tracking-widest"
                  >
                    Enter Arena 🚀
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 glass rounded-[4rem] p-16 text-center border-4 border-dashed border-gray-100 animate-fade-in" style={{ animationDelay: '1s' }}>
          <h3 className="text-3xl font-black text-midnight/20 mb-6 font-lexend uppercase tracking-tighter italic">Host your own event?</h3>
          <p className="text-base text-gray-400 font-bold max-w-sm mx-auto mb-10 uppercase tracking-widest leading-relaxed">Eligible Citizens (Rank 5+) can request to host a department workshop.</p>
          <button className="text-primary-orange font-black hover:text-midnight transition-all uppercase tracking-[0.2em] text-sm hover:translate-x-2 inline-block">Apply for Hosting Status →</button>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
