
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
    <div className="bg-neutral-light py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold font-lexend mb-4 text-midnight">How It Works</h1>
          <p className="text-xl text-gray-500">Your 5-step journey to leadership in the microworld.</p>
          <div className="h-1.5 w-24 bg-primary-orange mx-auto rounded-full mt-6" />
        </header>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 z-0 hidden md:block" />

          <div className="space-y-16 md:space-y-32">
            {steps.map((step, i) => (
              <div key={i} className={`relative z-10 flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className="flex-1 text-center md:text-right">
                  {i % 2 === 0 ? (
                    <div className="hidden md:block">
                      <h3 className="text-2xl font-bold text-midnight mb-2 font-lexend">{step.title}</h3>
                      <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                    </div>
                  ) : (
                    <div className="bg-primary-orange p-8 rounded-3xl shadow-xl text-white transform hover:scale-105 transition-transform shadow-orange-glow">
                      <h3 className="text-2xl font-bold mb-2 font-lexend">{step.title}</h3>
                      <p className="text-white/80 leading-relaxed">{step.desc}</p>
                    </div>
                  )}
                </div>

                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-xl ring-8 ring-white shrink-0 z-20 ${i % 2 === 0 ? 'bg-secondary-pink' : 'bg-primary-orange'}`}>
                  {step.icon}
                </div>

                <div className="flex-1 text-center md:text-left">
                  {i % 2 !== 0 ? (
                    <div className="hidden md:block">
                      <h3 className="text-2xl font-bold text-midnight mb-2 font-lexend">{step.title}</h3>
                      <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                    </div>
                  ) : (
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-midnight transform hover:scale-105 transition-transform">
                      <h3 className="text-2xl font-bold mb-2 font-lexend text-secondary-pink">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 text-center bg-action-gradient rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <h2 className="text-3xl font-bold mb-6 font-lexend relative z-10">Safe, Structured, and Secure</h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto relative z-10">Our platform is designed to scale with your child's maturity, offering more complex roles as they gain experience and level up.</p>
          <Link to="/onboarding" className="bg-white text-primary-orange px-12 py-4 rounded-full font-bold text-lg hover:bg-highlight-yellow hover:text-midnight transition-all transform hover:scale-110 inline-block shadow-xl relative z-10">
            Start Your First Day
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
