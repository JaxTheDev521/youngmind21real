
import React from 'react';

const AdminPanel: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-midnight font-lexend">Governance Hub (Admin)</h1>
            <p className="text-gray-500">Platform oversight and citizen management.</p>
          </div>
          <button className="bg-midnight text-white px-6 py-2 rounded-xl font-bold hover:bg-cyan hover:text-midnight transition-all">
            + New Announcement
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Citizens', value: '2,405', color: 'text-midnight' },
            { label: 'Pending Approvals', value: '18', color: 'text-coral' },
            { label: 'Active Elections', value: '1', color: 'text-cyan' },
            { label: 'Avg Credits/User', value: '850', color: 'text-emerald-500' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</span>
              <span className={`block text-3xl font-bold mt-1 ${stat.color}`}>{stat.value}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-50 flex items-center justify-between">
              <h3 className="font-bold text-midnight font-lexend">Pending Citizen Approvals</h3>
              <button className="text-sm text-cyan font-bold">Manage All</button>
            </div>
            <div className="divide-y divide-gray-50">
              {[
                { name: 'SkyWalker99', age: 10, email: 'p@guardian.com', date: '2 hours ago' },
                { name: 'LeaderJane', age: 12, email: 'm@parent.net', date: '5 hours ago' },
                { name: 'MiniBeast', age: 9, email: 'k@fam.org', date: 'Yesterday' },
              ].map((req, i) => (
                <div key={i} className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold">{req.name[0]}</div>
                    <div>
                      <p className="font-bold text-midnight">{req.name} (Age {req.age})</p>
                      <p className="text-xs text-gray-400">{req.email}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-lg hover:bg-emerald-100 transition-colors">Approve</button>
                    <button className="px-4 py-2 bg-coral/10 text-coral text-xs font-bold rounded-lg hover:bg-coral/20 transition-colors">Reject</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-midnight font-lexend mb-4">Platform Health</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Server Status</span>
                    <span className="text-emerald-500">Healthy</span>
                  </div>
                  <div className="w-full bg-gray-50 h-1 rounded-full">
                    <div className="bg-emerald-500 h-full w-[99%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Session Attendance</span>
                    <span>88%</span>
                  </div>
                  <div className="w-full bg-gray-50 h-1 rounded-full">
                    <div className="bg-cyan h-full w-[88%]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-midnight text-white rounded-3xl p-6 shadow-lg">
              <h3 className="font-bold font-lexend mb-2">System Broadcast</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">Send a push notification to all active devices in the Microworld.</p>
              <textarea 
                className="w-full bg-white/10 border border-white/20 rounded-xl p-3 text-sm focus:ring-1 focus:ring-cyan mb-4 h-24"
                placeholder="Type your announcement here..."
              ></textarea>
              <button className="w-full py-3 bg-cyan text-midnight font-bold rounded-xl text-sm shadow-xl hover:bg-white transition-all">Send Global Alert</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
