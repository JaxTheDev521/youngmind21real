
import React from 'react';
import { User, UserRole } from '../types';
import { DEPARTMENTS, MOCK_EVENTS } from '../constants';
import { Link } from 'react-router-dom';
import { Sparkles, Mic, Wrench, Rocket, Trophy } from 'lucide-react';

interface DashboardProps {
  user: User;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  return (
    <div className="min-h-screen bg-neutral-light py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-orange/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8 mb-8 sm:mb-12 bg-hero-gradient p-8 sm:p-10 md:p-14 rounded-[2.5rem] sm:rounded-[3rem] text-white shadow-[0_32px_64px_-16px_rgba(249,115,22,0.4)] relative overflow-hidden group animate-fade-in">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.3),transparent_70%)]" />
          <div className="relative z-10 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-lexend tracking-tight uppercase flex items-center justify-center md:justify-start gap-4">
              Welcome back, {user.name}! <Sparkles className="text-highlight-yellow animate-pulse" />
            </h1>
            <p className="text-highlight-yellow mt-3 sm:mt-4 text-xs sm:text-sm font-black uppercase tracking-[0.2em] flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 bg-highlight-yellow rounded-full animate-pulse" />
              Dept: {user.department || 'Undecided'}
            </p>
          </div>
          {/* ... Stats ... */}
          <div className="flex gap-3 sm:gap-4 relative z-10 justify-center">
            <div className="glass-dark px-4 sm:px-6 py-3 sm:py-4 rounded-[1.25rem] sm:rounded-[1.5rem] border-white/20 text-center backdrop-blur-3xl shadow-xl">
              <span className="block text-[8px] sm:text-[10px] text-white/50 uppercase tracking-[0.2em] font-black mb-1">Credits</span>
              <span className="text-2xl sm:text-3xl font-black text-highlight-yellow drop-shadow-sm font-lexend tracking-tight">1,250</span>
            </div>
            <div className="glass-dark px-4 sm:px-6 py-3 sm:py-4 rounded-[1.25rem] sm:rounded-[1.5rem] border-white/20 text-center backdrop-blur-3xl shadow-xl">
              <span className="block text-[8px] sm:text-[10px] text-white/50 uppercase tracking-[0.2em] font-black mb-1">Rank</span>
              <span className="text-2xl sm:text-3xl font-black text-white font-lexend tracking-tight">Citizen</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-12">
            {/* Upcoming Events */}
            <section className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center justify-between mb-8 px-2">
                <h2 className="text-2xl font-black text-midnight font-lexend uppercase tracking-tight">Upcoming Sessions</h2>
                <Link to="/events" className="text-xs text-primary-orange font-black hover:underline uppercase tracking-widest">View All Calendar →</Link>
              </div>
              <div className="space-y-6">
                {MOCK_EVENTS.map((event, i) => (
                  <div key={event.id} className="glass p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] shadow-xl border-white/50 flex flex-col md:flex-row items-center gap-6 sm:gap-8 hover:-translate-y-1 transition-all duration-300 group hover:shadow-orange-glow/10" style={{ animationDelay: `${i * 100}ms` }}>
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-[1.5rem] sm:rounded-[2rem] flex items-center justify-center bg-neutral-light/50 border border-white shadow-inner transform group-hover:rotate-6 transition-all text-primary-orange`}>
                      {event.category === 'Session' ? <Mic size={32} /> : <Wrench size={32} />}
                    </div>
                    <div className="flex-grow text-center md:text-left">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                        <h3 className="font-black text-xl text-midnight font-lexend uppercase tracking-tight">{event.title}</h3>
                        {event.is_premium && <span className="inline-block px-3 py-1 bg-highlight-yellow/20 text-primary-orange rounded-full text-[10px] font-black uppercase tracking-widest border border-highlight-yellow/30 w-fit mx-auto md:mx-0">Premium</span>}
                      </div>
                      <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">{new Date(event.start_datetime).toLocaleDateString([], { weekday: 'long', hour: '2-digit', minute: '2-digit' })}</p>
                    </div>
                    <div className="w-full md:w-auto">
                      {event.is_premium && user.role !== UserRole.PREMIUM ? (
                        <button className="w-full md:w-auto px-8 py-4 bg-gray-100 text-gray-300 rounded-2xl font-black text-xs uppercase tracking-widest cursor-not-allowed">Upgrade Required</button>
                      ) : (
                        <a
                          href={event.zoom_join_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full md:w-auto flex items-center justify-center gap-3 bg-primary-orange text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl text-sm font-black hover:bg-highlight-yellow hover:text-midnight transition-all shadow-xl active:scale-95 shadow-orange-glow uppercase tracking-wide"
                        >
                          Join Now <Rocket size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* My Departments */}
            <section className="animate-fade-in" style={{ animationDelay: '400ms' }}>
              <h2 className="text-2xl font-black text-midnight font-lexend mb-8 px-2 uppercase tracking-tight">Microworld Departments</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {DEPARTMENTS.map((dept, i) => (
                  <div key={dept.id} className="glass p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] shadow-xl border-white/50 group hover:border-primary-orange/20 transition-all duration-500 hover:shadow-orange-glow/10 flex flex-col items-center text-center" style={{ animationDelay: `${i * 100}ms` }}>
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-[1.25rem] sm:rounded-[1.5rem] ${dept.color} text-white flex items-center justify-center mb-4 sm:mb-6 shadow-2xl group-hover:scale-110 transition-transform group-hover:rotate-6`}>
                      {dept.icon}
                    </div>
                    <h3 className="font-black text-lg sm:text-xl text-midnight mb-2 sm:mb-3 font-lexend uppercase tracking-tight">{dept.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed mb-6 sm:mb-8">{dept.description}</p>
                    <button className="text-primary-orange text-[10px] sm:text-xs font-black hover:underline uppercase tracking-[0.2em] mt-auto">Enter Office →</button>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-10 animate-fade-in" style={{ animationDelay: '600ms' }}>
            {/* Voting Stats */}
            <section className="bg-midnight p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary-orange/10 rounded-full blur-[80px] -mr-24 -mt-24 group-hover:scale-150 transition-transform duration-700" />
              <h2 className="text-xl font-black mb-8 font-lexend relative z-10 uppercase tracking-tight">Live Elections</h2>
              <div className="p-8 glass-dark rounded-[2rem] border-white/10 relative z-10 backdrop-blur-2xl">
                <div className="flex justify-between items-center mb-6">
                  <p className="text-xs font-black uppercase tracking-widest text-white/70">Council Seat</p>
                  <span className="w-2 h-2 bg-highlight-yellow rounded-full animate-pulse" />
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-xs font-black mb-2 uppercase tracking-widest text-white/50">
                      <span>Alex (Innovation)</span>
                      <span className="text-primary-orange">45%</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden shadow-inner">
                      <div className="bg-primary-orange h-full shadow-orange-glow" style={{ width: '45%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-black mb-2 uppercase tracking-widest text-white/50">
                      <span>Maya (Justice)</span>
                      <span className="text-secondary-pink">55%</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden shadow-inner">
                      <div className="bg-secondary-pink h-full shadow-pink-glow" style={{ width: '55%' }} />
                    </div>
                  </div>
                </div>
                <Link to="/voting" className="block text-center mt-10 bg-white text-midnight font-black py-4 rounded-xl text-sm hover:bg-highlight-yellow transition-all shadow-2xl active:scale-95 uppercase tracking-widest">
                  Cast Your Vote
                </Link>
              </div>
            </section>

            {/* Achievement / Certificate */}
            <section className="glass p-10 rounded-[3rem] border-white/50 shadow-xl text-center group hover:shadow-pink-glow/10 transition-all duration-500">
              <div className="w-[100px] h-[100px] bg-highlight-yellow text-midnight rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500 border-4 border-white">
                <Trophy size={48} />
              </div>
              <h3 className="font-black text-2xl text-midnight uppercase tracking-tight font-lexend">New Badge!</h3>
              <p className="text-sm text-gray-500 font-medium mt-4 mb-8 leading-relaxed italic">Complete 'Market Basics' to earn this digital certification.</p>
              <button className="w-full py-4 border-4 border-primary-orange rounded-2xl text-primary-orange font-black text-xs uppercase tracking-[0.2em] hover:bg-primary-orange hover:text-white transition-all shadow-xl active:scale-95">
                Learn More
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
