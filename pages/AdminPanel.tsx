
import React from 'react';

const AdminPanel: React.FC = () => {
  return (
    <div className="bg-neutral-light min-h-screen py-16 px-4 shadow-inner">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 animate-fade-in">
          <div>
            <h1 className="text-4xl lg:text-5xl font-black text-midnight font-lexend tracking-tight uppercase">Governance Hub</h1>
            <p className="text-gray-500 font-bold mt-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary-orange rounded-full animate-pulse" />
              Platform oversight and citizen management.
            </p>
          </div>
          <button className="bg-primary-orange text-white px-8 py-4 rounded-2xl font-black hover:bg-highlight-yellow hover:text-midnight transition-all shadow-2xl active:scale-95 shadow-orange-glow uppercase tracking-wide text-sm">
            + New Announcement
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            { label: 'Total Citizens', value: '2,405', color: 'text-midnight', icon: '👥' },
            { label: 'Pending Approvals', value: '18', color: 'text-secondary-pink', icon: '⏳' },
            { label: 'Active Elections', value: '1', color: 'text-primary-orange', icon: '🗳️' },
            { label: 'Avg Credits', value: '850', color: 'text-primary-orange', icon: '💰' },
          ].map((stat, i) => (
            <div key={i} className="glass p-8 rounded-[2rem] shadow-xl border-white/50 hover:-translate-y-1 transition-all duration-300 animate-fade-in group hover:shadow-orange-glow/10" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{stat.label}</span>
                <span className="text-2xl opacity-50">{stat.icon}</span>
              </div>
              <span className={`block text-4xl font-black tracking-tight ${stat.color}`}>{stat.value}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 glass rounded-[3rem] shadow-xl border-white/50 overflow-hidden animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="p-8 border-b border-gray-100 flex items-center justify-between bg-neutral-light/30">
              <h3 className="font-black text-xl text-midnight font-lexend uppercase tracking-tight">Pending Approvals</h3>
              <button className="text-xs text-primary-orange font-black hover:underline uppercase tracking-widest">Manage All →</button>
            </div>
            <div className="divide-y divide-gray-100">
              {[
                { name: 'SkyWalker99', age: 10, email: 'p@guardian.com', date: '2 hours ago' },
                { name: 'LeaderJane', age: 12, email: 'm@parent.net', date: '5 hours ago' },
                { name: 'MiniBeast', age: 9, email: 'k@fam.org', date: 'Yesterday' },
              ].map((req, i) => (
                <div key={i} className="p-8 flex items-center justify-between group hover:bg-neutral-light/50 transition-colors">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-hero-gradient text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg transform group-hover:rotate-6 transition-all">{req.name[0]}</div>
                    <div>
                      <p className="font-extrabold text-lg text-midnight">{req.name} <span className="text-gray-400 font-bold ml-2">(Age {req.age})</span></p>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{req.email}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-6 py-2.5 bg-primary-orange/10 text-primary-orange text-xs font-black rounded-xl hover:bg-primary-orange hover:text-white transition-all uppercase tracking-widest border border-primary-orange/20 shadow-orange-glow/10">Approve</button>
                    <button className="px-6 py-2.5 bg-secondary-pink/10 text-secondary-pink text-xs font-black rounded-xl hover:bg-secondary-pink hover:text-white transition-all uppercase tracking-widest border border-secondary-pink/20">Reject</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <div className="glass rounded-[3rem] p-8 shadow-xl border-white/50 animate-fade-in" style={{ animationDelay: '500ms' }}>
              <h3 className="font-black text-xl text-midnight font-lexend mb-8 uppercase tracking-tight">System Health</h3>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between text-xs font-black mb-2 uppercase tracking-widest text-gray-500">
                    <span>Server Status</span>
                    <span className="text-primary-orange">Healthy</span>
                  </div>
                  <div className="w-full bg-neutral-light h-3 rounded-full overflow-hidden shadow-inner">
                    <div className="bg-primary-orange h-full w-[99%] shadow-orange-glow" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-black mb-2 uppercase tracking-widest text-gray-500">
                    <span>Attendance</span>
                    <span className="text-secondary-pink">88%</span>
                  </div>
                  <div className="w-full bg-neutral-light h-3 rounded-full overflow-hidden shadow-inner">
                    <div className="bg-secondary-pink h-full w-[88%] shadow-pink-glow" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-hero-gradient text-white rounded-[3rem] p-10 shadow-2xl relative overflow-hidden group animate-fade-in" style={{ animationDelay: '600ms' }}>
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-24 -mt-24 group-hover:scale-150 transition-transform duration-700" />
              <h3 className="text-2xl font-black font-lexend mb-4 relative z-10 tracking-tight uppercase">Global Broadcast</h3>
              <p className="text-base text-white/80 leading-relaxed mb-8 relative z-10 font-medium">Send a push notification to all citizens in the Microworld.</p>
              <textarea
                className="w-full bg-white/10 border border-white/20 rounded-[1.5rem] p-5 text-base focus:ring-4 focus:ring-highlight-yellow/30 bg-blur-xl mb-6 h-32 outline-none relative z-10 placeholder-white/30 font-medium transition-all"
                placeholder="Type your alert here..."
              ></textarea>
              <button className="w-full py-5 bg-white text-primary-orange font-black rounded-2xl text-base shadow-2xl hover:bg-highlight-yellow hover:text-midnight transition-all relative z-10 uppercase tracking-widest active:scale-95 shadow-orange-glow/20">Send Global Alert</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
