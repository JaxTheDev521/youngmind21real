
import React from 'react';
import { Link } from 'react-router-dom';
import globalGames from '../assets/global-games.png';

const Programs: React.FC = () => {
  const categories = [
    { title: 'Weekly Sessions', items: ['Mini-State Council (Sat)', 'Trade Talk (Wed)', 'The Ethics Forum (Fri)'] },
    { title: 'Special Workshops', items: ['Intro to Digital Currency', 'Conflict Resolution Mastery', 'Pitch Your Vision'] },
    { title: 'Leadership Tracks', items: ['Young Governor Program', 'Ethics Inspector', 'Commerce Pioneer'] },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-midnight font-lexend mb-4">Educational Programs</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Curated experiences designed to foster real-world understanding through play and governance.</p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col">
              <h3 className="text-xl font-bold text-midnight font-lexend mb-6 pb-4 border-b border-gray-50">{cat.title}</h3>
              <ul className="space-y-4 mb-8 flex-grow">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-cyan rounded-full" />
                    <span className="text-gray-700 font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-gray-50 text-midnight rounded-xl font-bold text-sm hover:bg-midnight hover:text-white transition-all">
                View Schedule
              </button>
            </div>
          ))}
        </div>

        <section className="mt-20 grid lg:grid-cols-2 gap-12 items-center bg-midnight rounded-[40px] overflow-hidden text-white p-8 lg:p-16 shadow-2xl">
          <div>
            <span className="text-cyan font-bold uppercase tracking-widest text-xs mb-4 block">Seasonal Feature</span>
            <h2 className="text-3xl lg:text-4xl font-bold font-lexend mb-6">Microworld Global Games</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Our annual competition where different digital nations compete in innovation challenges, debates, and community building projects.
            </p>
            <Link to="/onboarding" className="bg-coral text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-coral transition-all inline-block shadow-lg">
              Pre-Register for 2025
            </Link>
          </div>
          <div className="relative">
            <img src={globalGames} alt="Global Games" className="rounded-2xl shadow-xl border border-white/10" />
            <div className="absolute -bottom-4 -right-4 bg-cyan text-midnight font-black p-6 rounded-full text-2xl animate-bounce">
              JOIN!
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Programs;
