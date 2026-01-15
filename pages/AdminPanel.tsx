
import React from 'react';

const AdminPanel: React.FC = () => {
  return (
    <div className="bg-neutral-light min-h-screen py-10 px-4 shadow-inner">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-midnight font-lexend">Governance Hub (Admin)</h1>
            <p className="text-gray-500">Platform oversight and citizen management.</p>
          </div>
          <button className="bg-primary-orange text-white px-6 py-2 rounded-xl font-bold hover:bg-primary-orange/90 transition-all shadow-md active:scale-95 shadow-orange-glow">
            + New Announcement
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Citizens', value: '2,405', color: 'text-midnight' },
            { label: 'Pending Approvals', value: '18', color: 'text-secondary-pink' },
            { label: 'Active Elections', value: '1', color: 'text-primary-orange' },
            { label: 'Avg Credits/User', value: '850', color: 'text-primary-orange' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-orange-glow transition-all">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</span>
              <span className={`block text-3xl font-bold mt-1 ${stat.color}`}>{stat.value}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-50 flex items-center justify-between">
              <h3 className="font-bold text-midnight font-lexend">Pending Citizen Approvals</h3>
              <button className="text-sm text-primary-orange font-bold hover:underline">Manage All</button>
            </div>
            <div className="divide-y divide-gray-50">
              {[
                { name: 'SkyWalker99', age: 10, email: 'p@guardian.com', date: '2 hours ago' },
                { name: 'LeaderJane', age: 12, email: 'm@parent.net', date: '5 hours ago' },
                { name: 'MiniBeast', age: 9, email: 'k@fam.org', date: 'Yesterday' },
              ].map((req, i) => (
                <div key={i} className="p-6 flex items-center justify-between group hover:bg-neutral-light transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-orange-100 text-primary-orange rounded-full flex items-center justify-center font-bold">{req.name[0]}</div>
                    <div>
                      <p className="font-bold text-midnight">{req.name} (Age {req.age})</p>
                      <p className="text-xs text-gray-400">{req.email}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-primary-orange/10 text-primary-orange text-xs font-bold rounded-lg hover:bg-primary-orange/20 transition-colors">Approve</button>
                    <button className="px-4 py-2 bg-secondary-pink/10 text-secondary-pink text-xs font-bold rounded-lg hover:bg-secondary-pink/20 transition-colors">Reject</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-pink-glow transition-all">
              <h3 className="font-bold text-midnight font-lexend mb-4">Platform Health</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Server Status</span>
                    <span className="text-primary-orange">Healthy</span>
                  </div>
                  <div className="w-full bg-neutral-light h-1 rounded-full">
                    <div className="bg-primary-orange h-full w-[99%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Session Attendance</span>
                    <span>88%</span>
                  </div>
                  <div className="w-full bg-neutral-light h-1 rounded-full">
                    <div className="bg-secondary-pink h-full w-[88%]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-hero-gradient text-white rounded-3xl p-6 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16" />
              <h3 className="font-bold font-lexend mb-2 relative z-10">System Broadcast</h3>
              <p className="text-xs text-white/70 leading-relaxed mb-4 relative z-10">Send a push notification to all active devices in the Microworld.</p>
              <textarea
                className="w-full bg-white/10 border border-white/20 rounded-xl p-3 text-sm focus:ring-1 focus:ring-highlight-yellow mb-4 h-24 outline-none relative z-10 placeholder-white/30"
                placeholder="Type your announcement here..."
              ></textarea>
              <button className="w-full py-3 bg-white text-primary-orange font-bold rounded-xl text-sm shadow-xl hover:bg-highlight-yellow hover:text-midnight transition-all relative z-10">Send Global Alert</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
