
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
    <div className="bg-neutral-light min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-midnight font-lexend mb-4">Educational Programs</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Curated experiences designed to foster real-world understanding through play and governance.</p>
          <div className="h-1.5 w-24 bg-primary-orange mx-auto rounded-full mt-6" />
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col hover:shadow-pink-glow transition-all">
              <h3 className="text-xl font-bold text-midnight font-lexend mb-6 pb-4 border-b-2 border-primary-orange inline-block">{cat.title}</h3>
              <ul className="space-y-4 mb-8 flex-grow">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-secondary-pink rounded-full" />
                    <span className="text-gray-700 font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-gray-50 text-midnight rounded-xl font-bold text-sm hover:bg-primary-orange hover:text-white transition-all">
                View Schedule
              </button>
            </div>
          ))}
        </div>

        <section className="mt-20 grid lg:grid-cols-2 gap-12 items-center bg-hero-gradient rounded-[40px] overflow-hidden text-white p-8 lg:p-16 shadow-2xl relative">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.2),transparent_50%)] pointer-events-none" />
          <div className="relative z-10">
            <span className="text-highlight-yellow font-bold uppercase tracking-widest text-xs mb-4 block">Seasonal Feature</span>
            <h2 className="text-3xl lg:text-4xl font-bold font-lexend mb-6">Microworld Global Games</h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              Our annual competition where different digital nations compete in innovation challenges, debates, and community building projects.
            </p>
            <Link to="/onboarding" className="bg-white text-primary-orange px-8 py-3 rounded-full font-bold hover:bg-highlight-yellow hover:text-midnight transition-all inline-block shadow-lg">
              Pre-Register for 2025
            </Link>
          </div>
          <div className="relative z-10">
            <img src={globalGames} alt="Global Games" className="rounded-2xl shadow-xl border-4 border-white/20" />
            <div className="absolute -bottom-4 -right-4 bg-highlight-yellow text-midnight font-black p-6 rounded-full text-2xl animate-bounce shadow-xl">
              JOIN!
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Programs;
