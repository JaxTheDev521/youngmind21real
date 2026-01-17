
import React from 'react';
import { MOCK_EVENTS } from '../constants';
import { User, UserRole, MicroworldEvent } from '../types';
import { Mic, GraduationCap, Rocket } from 'lucide-react';

interface EventsPageProps {
  user: User;
}

const EventsPage: React.FC<EventsPageProps> = ({ user }) => {
  const formatCalendarDate = (dateStr: string) => {
    return new Date(dateStr).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const getCalendarUrl = (event: MicroworldEvent) => {
    const start = formatCalendarDate(event.start_datetime);
    const endDate = new Date(new Date(event.start_datetime).getTime() + event.duration_minutes * 60000);
    const end = formatCalendarDate(endDate.toISOString());

    const baseUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
    const params = new URLSearchParams({
      text: event.title,
      dates: `${start}/${end}`,
      details: event.description,
      location: event.zoom_join_link || '',
    });

    return `${baseUrl}&${params.toString()}`;
  };

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
            <div
              key={event.id}
              className="bg-white rounded-[2rem] p-8 md:p-12 shadow-md border-white/50 flex flex-col lg:flex-row items-center gap-10 group hover:-translate-y-1.5 transition-all duration-500 hover:shadow-pink-glow relative overflow-hidden animate-fade-in"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-pink via-primary-orange to-highlight-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

              <div className="lg:w-1/4 w-full relative z-10">
                <div className={`aspect-square rounded-[2rem] flex items-center justify-center bg-neutral-light shadow-inner border-2 border-white transform group-hover:rotate-3 transition-all duration-500 text-primary-orange group-hover:text-white group-hover:bg-white/20`}>
                  {event.category === 'Session' ? <Mic size={64} /> : <GraduationCap size={64} />}
                </div>
              </div>

              <div className="flex-grow text-center lg:text-left relative z-10 transition-colors duration-500 group-hover:text-white">
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
                  <span className="px-5 py-2 bg-secondary-pink/10 text-secondary-pink text-[10px] font-black rounded-full uppercase tracking-[0.2em] border border-secondary-pink/20 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/40">
                    {event.category}
                  </span>
                  {event.is_premium && (
                    <span className="px-5 py-2 bg-highlight-yellow/20 text-primary-orange text-[10px] font-black rounded-full uppercase tracking-[0.2em] border border-highlight-yellow/30 shadow-orange-glow/10 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/40 group-hover:shadow-none">
                      Premium Protocol
                    </span>
                  )}
                </div>
                <h3 className="text-3xl lg:text-4xl font-black mb-4 font-lexend uppercase tracking-tight group-hover:text-white text-midnight">
                  {event.title}
                </h3>
                <p className="text-lg mb-8 leading-relaxed font-bold italic text-gray-500 group-hover:text-white/90">
                  {event.description}
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-3 text-sm font-black uppercase tracking-widest bg-white/40 w-fit px-6 py-3 rounded-2xl mx-auto lg:mx-0 border border-white/50 group-hover:bg-white/20 group-hover:text-white text-gray-400">
                  <span className="text-secondary-pink group-hover:text-white">●</span>
                  {new Date(event.start_datetime).toLocaleDateString([], { weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' })}
                  <span className="opacity-50 ml-2">({event.timezone})</span>
                </div>
              </div>

              <div className="lg:w-1/4 w-full flex flex-col gap-4 relative z-10">
                {event.is_premium && user.role !== UserRole.PREMIUM ? (
                  <button className="w-full bg-white/50 border-2 border-gray-100 text-gray-300 py-6 rounded-2xl font-black text-xs uppercase tracking-widest cursor-not-allowed">
                    Upgrade Required
                  </button>
                ) : (
                  <a
                    href={event.zoom_join_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-4 text-center bg-gradient-to-r from-secondary-pink to-primary-orange text-white hover:scale-105 py-5 rounded-full font-black text-sm transition-all shadow-lg active:scale-95 hover:shadow-pink-glow uppercase tracking-widest"
                  >
                    Join Zoom <Rocket size={20} />
                  </a>
                )}

                <a
                  href={getCalendarUrl(event)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center border-2 border-highlight-yellow text-primary-orange hover:bg-highlight-yellow hover:text-midnight py-4 rounded-full font-black text-xs transition-all uppercase tracking-widest group-hover:border-white group-hover:text-white group-hover:hover:bg-white group-hover:hover:text-primary-orange"
                >
                  Save to Calendar
                </a>
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
