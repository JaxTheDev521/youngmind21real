import React from 'react';
import { Link } from 'react-router-dom';
import globalGames from '../assets/global-games.png';
import { Trophy } from 'lucide-react';

const Programs: React.FC = () => {
  const categories = [
    { title: 'Weekly Sessions', items: ['Mini-State Council (Sat)', 'Trade Talk (Wed)', 'The Ethics Forum (Fri)'] },
    { title: 'Special Workshops', items: ['Intro to Digital Currency', 'Conflict Resolution Mastery', 'Pitch Your Vision'] },
    { title: 'Leadership Tracks', items: ['Young Governor Program', 'Ethics Inspector', 'Commerce Pioneer'] },
  ];

  return (
    <div className="bg-neutral-light min-h-screen py-24 px-4 overflow-hidden relative">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-orange/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-pink/5 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-16 sm:mb-24 text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-midnight font-lexend mb-4 sm:mb-6 tracking-tight uppercase">Sovereign Curricula</h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 font-bold max-w-2xl mx-auto uppercase tracking-wide leading-relaxed">Curated for future governors, pioneers, and world-builders.</p>
          <div className="h-2 w-20 sm:w-24 bg-primary-orange mx-auto rounded-full mt-8 sm:mt-10 shadow-orange-glow" />
        </header>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 mb-20 sm:mb-32">
          {categories.map((cat, i) => (
            <div key={i} className="glass rounded-[2.5rem] sm:rounded-[3.5rem] p-8 lg:p-12 shadow-2xl border-white/50 flex flex-col hover:-translate-y-3 transition-all duration-500 group animate-fade-in hover:shadow-orange-glow/10" style={{ animationDelay: `${i * 150}ms` }}>
              <h3 className="text-xl sm:text-2xl font-black text-midnight font-lexend mb-6 sm:mb-10 pb-4 border-b-8 border-primary-orange inline-block uppercase tracking-tighter italic">{cat.title}</h3>
              <ul className="space-y-4 sm:space-y-6 mb-8 sm:mb-12 flex-grow">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-4 sm:gap-5 group/item">
                    <div className="w-2.5 h-2.5 sm:w-3 h-3 bg-secondary-pink rounded-full group-hover/item:scale-[2] transition-all duration-300 shadow-sm" />
                    <span className="text-gray-600 font-bold text-base sm:text-lg tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 sm:py-5 bg-white border-2 border-gray-50 text-midnight rounded-[1.5rem] font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] hover:bg-primary-orange hover:text-white hover:border-primary-orange transition-all shadow-xl active:scale-95 group-hover:shadow-orange-glow/20">
                Access Dossier
              </button>
            </div>
          ))}
        </div>

        <section className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center bg-hero-gradient rounded-[3rem] sm:rounded-[5rem] overflow-hidden text-white p-8 sm:p-14 lg:p-24 shadow-[0_48px_80px_-16px_rgba(249,115,22,0.4)] relative animate-fade-in" style={{ animationDelay: '500ms' }}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.4),transparent_70%)] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />

          <div className="relative z-10 lg:col-span-7 text-center lg:text-left">
            <div className="inline-block px-4 sm:px-6 py-2 bg-white/10 backdrop-blur-md text-highlight-yellow rounded-full text-[8px] sm:text-[10px] font-black uppercase tracking-[0.3em] mb-6 sm:mb-8 border border-white/20 shadow-xl">Grand Initiative</div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black font-lexend mb-6 sm:mb-10 leading-[0.9] tracking-tighter uppercase italic">Microworld <br /><span className="text-highlight-yellow drop-shadow-orange-glow">Championship</span></h2>
            <p className="text-white/80 mb-8 sm:mb-14 leading-relaxed text-lg sm:text-xl lg:text-2xl font-bold max-w-xl mx-auto lg:mx-0 italic">
              "The proving ground for young leaders. Competitions in innovation, sovereign debate, and planetary impact."
            </p>
            <Link to="/onboarding" className="bg-white text-primary-orange px-8 sm:px-14 py-4 sm:py-6 rounded-[1.5rem] sm:rounded-[2rem] font-black text-xl sm:text-2xl hover:bg-highlight-yellow hover:text-midnight transition-all inline-block shadow-2xl active:scale-95 shadow-orange-glow transform hover:scale-110 uppercase tracking-widest flex items-center justify-center gap-4">
              Secure Your Spot <Trophy size={28} />
            </Link>
          </div>

          <div className="relative z-10 lg:col-span-5 group">
            <div className="absolute -inset-10 bg-highlight-yellow/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-all duration-1000" />
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-secondary-pink rounded-full blur-3xl opacity-20 animate-pulse" />
            <img
              src={globalGames}
              alt="Global Games Champion"
              className="relative rounded-[4rem] shadow-[0_64px_96px_-16px_rgba(0,0,0,0.6)] border-8 border-white transition-all duration-700 group-hover:scale-[1.05] group-hover:rotate-2"
            />
            <div className="absolute -bottom-6 sm:-bottom-10 -right-6 sm:-right-10 bg-highlight-yellow text-midnight font-black px-6 sm:px-12 py-6 sm:py-12 rounded-2xl text-2xl sm:text-4xl transform -rotate-12 shadow-[0_32px_64px_-12px_rgba(255,215,0,0.6)] border-4 border-white animate-bounce-slow flex flex-col items-center justify-center gap-1 group-hover:rotate-0 transition-all duration-500">
              <span className="text-[8px] sm:text-sm uppercase tracking-widest opacity-50">Victory</span>
              WIN!
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Programs;
