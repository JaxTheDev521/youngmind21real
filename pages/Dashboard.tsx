
import React from 'react';
import { User, UserRole } from '../types';
import { DEPARTMENTS, MOCK_EVENTS } from '../constants';
import { Link } from 'react-router-dom';

interface DashboardProps {
  user: User;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  return (
    <div className="min-h-screen bg-neutral-light py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 bg-hero-gradient p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold font-lexend">Welcome back, {user.name}! 🌟</h1>
            <p className="text-highlight-yellow mt-2 font-medium">Department: {user.department || 'Undecided'}</p>
          </div>
          <div className="flex gap-3 relative z-10">
            <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/20 text-center backdrop-blur-sm">
              <span className="block text-xs text-white/70 uppercase tracking-widest font-bold">Credits</span>
              <span className="text-xl font-bold text-highlight-yellow">1,250</span>
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/20 text-center backdrop-blur-sm">
              <span className="block text-xs text-white/70 uppercase tracking-widest font-bold">Rank</span>
              <span className="text-xl font-bold text-white">Citizen</span>
            </div>
          </div>
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-highlight-yellow/10 rounded-full blur-3xl -mr-20 -mt-20" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Events */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-midnight font-lexend">Upcoming Sessions</h2>
                <Link to="/events" className="text-sm text-primary-orange font-bold hover:underline">View All</Link>
              </div>
              <div className="space-y-4">
                {MOCK_EVENTS.map(event => (
                  <div key={event.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-pink-glow transition-all">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl bg-gray-50 border border-gray-100`}>
                      {event.category === 'Session' ? '🎙️' : '🛠️'}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-midnight">{event.title}</h3>
                      <p className="text-sm text-gray-500">{event.dateTime}</p>
                    </div>
                    <a
                      href={event.zoomLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary-orange text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-highlight-yellow hover:text-midnight transition-all shadow-md active:scale-95"
                    >
                      Join Zoom
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* My Departments */}
            <section>
              <h2 className="text-xl font-bold text-midnight font-lexend mb-4">Microworld Departments</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {DEPARTMENTS.map(dept => (
                  <div key={dept.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group hover:border-primary-orange/50 transition-all hover:shadow-orange-glow">
                    <div className={`w-12 h-12 rounded-lg ${dept.color} text-white flex items-center justify-center text-xl mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      {dept.icon}
                    </div>
                    <h3 className="font-bold text-midnight mb-1">{dept.name}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4">{dept.description}</p>
                    <button className="text-primary-orange text-sm font-bold hover:underline">Enter Office →</button>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Voting Stats */}
            <section className="bg-midnight p-6 rounded-2xl text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-orange/10 rounded-full blur-2xl -mr-16 -mt-16" />
              <h2 className="text-lg font-bold mb-4 font-lexend relative z-10">Live Elections</h2>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 relative z-10">
                <p className="text-sm font-medium mb-3">Council Representative</p>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Alex (Innovation)</span>
                      <span>45%</span>
                    </div>
                    <div className="w-full bg-white/20 h-1.5 rounded-full">
                      <div className="bg-primary-orange h-full rounded-full" style={{ width: '45%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Maya (Justice)</span>
                      <span>55%</span>
                    </div>
                    <div className="w-full bg-white/20 h-1.5 rounded-full">
                      <div className="bg-secondary-pink h-full rounded-full" style={{ width: '55%' }} />
                    </div>
                  </div>
                </div>
                <Link to="/voting" className="block text-center mt-6 bg-primary-orange text-white font-bold py-2 rounded-lg text-sm hover:bg-highlight-yellow hover:text-midnight transition-all shadow-md">
                  Cast Your Vote
                </Link>
              </div>
            </section>

            {/* Achievement / Certificate */}
            <section className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center">
              <div className="w-20 h-20 bg-highlight-yellow/10 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 border border-highlight-yellow/20">
                🏆
              </div>
              <h3 className="font-bold text-midnight">New Badge Available!</h3>
              <p className="text-sm text-gray-500 mt-2 mb-4">Complete the 'Market Fundamentals' workshop to earn this badge.</p>
              <button className="w-full py-2 border-2 border-primary-orange rounded-xl text-primary-orange font-bold text-sm hover:bg-primary-orange hover:text-white transition-all shadow-sm">
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
