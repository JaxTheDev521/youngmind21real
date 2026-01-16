
import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks: React.FC = () => {
  const steps = [
    { title: 'Join & Onboard', desc: 'Sign up with your parent and choose your initial department interest.', icon: '👤' },
    { title: 'Departments (Mini-States)', desc: 'Join a specific group focused on commerce, justice, tech, or arts.', icon: '🏛️' },
    { title: 'Elections & Governance', desc: 'Run for office or vote for your peers to lead departments.', icon: '🗳️' },
    { title: 'Weekly Sessions', desc: 'Participate in live moderated Zoom workshops and meetings.', icon: '🎙️' },
    { title: 'Projects & Marketplace', desc: 'Build actual digital projects and trade skills for microworld credits.', icon: '🚀' },
  ];

  return (
    <div className="bg-neutral-light py-16 sm:py-24 px-4 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary-pink/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-5xl mx-auto relative z-10">
        <header className="text-center mb-16 sm:mb-24 animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-lexend mb-4 sm:mb-6 text-midnight tracking-tight uppercase">How It Works</h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 font-bold max-w-2xl mx-auto uppercase tracking-wide">Your 5-step journey to leadership.</p>
          <div className="h-2 w-20 sm:w-24 bg-primary-orange mx-auto rounded-full mt-6 sm:mt-8 shadow-orange-glow" />
        </header>

        <div className="relative">
          {/* Vertical line with gradient */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-primary-orange via-secondary-pink to-primary-orange -translate-x-1/2 z-0 hidden md:block rounded-full opacity-20 shadow-inner" />

          <div className="space-y-16 sm:space-y-24 md:space-y-48">
            {steps.map((step, i) => (
              <div key={i} className={`relative z-10 flex flex-col md:flex-row items-center gap-8 sm:gap-12 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'} animate-fade-in`} style={{ animationDelay: `${i * 200}ms` }}>
                <div className="flex-1 text-center md:text-right">
                  {i % 2 === 0 ? (
                    <div className="hidden md:block transition-all hover:translate-x-2">
                      <h3 className="text-3xl font-black text-midnight mb-4 font-lexend uppercase tracking-tight">{step.title}</h3>
                      <p className="text-gray-500 leading-relaxed text-lg font-bold">{step.desc}</p>
                    </div>
                  ) : (
                    <div className="bg-hero-gradient p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl text-white transform hover:scale-105 transition-all duration-500 border-4 border-white/10 group">
                      <h3 className="text-2xl sm:text-3xl font-black mb-3 sm:mb-4 font-lexend uppercase tracking-tight group-hover:text-highlight-yellow transition-colors">{step.title}</h3>
                      <p className="opacity-90 leading-relaxed text-base sm:text-lg font-medium">{step.desc}</p>
                    </div>
                  )}
                </div>

                <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-3xl sm:text-4xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] ring-[12px] sm:ring-[16px] ring-neutral-light shrink-0 z-20 group transition-all duration-500 hover:rotate-12 ${i % 2 === 0 ? 'bg-secondary-pink' : 'bg-primary-orange'}`}>
                  {step.icon}
                </div>

                <div className="flex-1 text-center md:text-left">
                  {i % 2 !== 0 ? (
                    <div className="hidden md:block transition-all hover:-translate-x-2">
                      <h3 className="text-3xl font-black text-midnight mb-4 font-lexend uppercase tracking-tight">{step.title}</h3>
                      <p className="text-gray-500 leading-relaxed text-lg font-bold">{step.desc}</p>
                    </div>
                  ) : (
                    <div className="glass p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl border-white/50 text-midnight transform hover:scale-105 transition-all duration-500 group">
                      <h3 className="text-2xl sm:text-3xl font-black mb-3 sm:mb-4 font-lexend text-secondary-pink uppercase tracking-tight group-hover:text-primary-orange transition-colors">{step.title}</h3>
                      <p className="text-gray-500 leading-relaxed text-base sm:text-lg font-bold">{step.desc}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 sm:mt-48 text-center bg-hero-gradient rounded-[3.5rem] sm:rounded-[4rem] p-10 sm:p-16 lg:p-24 text-white shadow-[0_32px_64px_-16px_rgba(249,115,22,0.4)] relative overflow-hidden animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 font-lexend relative z-10 tracking-tight uppercase">Safe, Structured, and Secure</h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto relative z-10 font-bold leading-relaxed italic">"Our platform is designed to scale with your child's maturity, offering more complex roles as they gain experience and level up."</p>
          <Link to="/onboarding" className="bg-white text-primary-orange px-10 sm:px-16 py-4 sm:py-6 rounded-2xl font-black text-xl sm:text-2xl hover:bg-highlight-yellow hover:text-midnight transition-all transform hover:scale-110 inline-block shadow-2xl relative z-10 shadow-orange-glow active:scale-95 uppercase tracking-widest">
            Start Your First Day 🚀
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
