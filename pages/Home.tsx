
import React from 'react';
import { Link } from 'react-router-dom';
import heroLeadership from '../assets/hero-leadership.png';
import safetyTrust from '../assets/safety-trust.png';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden bg-neutral-light">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center bg-midnight lg:bg-hero-gradient text-white py-16 sm:py-24 lg:py-0 overflow-hidden">
        {/* Mobile-only background image */}
        <div
          className="absolute inset-0 block lg:hidden bg-cover bg-center z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.7)), url(${heroLeadership})`
          }}
        />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.15),transparent_60%)] pointer-events-none z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl sm:text-6xl lg:text-[5.5rem] font-black font-lexend mb-6 sm:mb-8 leading-[1.1] tracking-tight">
                Young <span className="text-highlight-yellow drop-shadow-orange-glow">Microworld</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-3xl text-white/90 mb-8 sm:mb-12 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
                Where Kids Experience the World in a Mini Way.
                <span className="block mt-2 sm:mt-4 text-white/70 text-base sm:text-lg lg:text-xl font-normal">Develop leadership, responsibility, and entrepreneurship through interactive mini-society experiences.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                <Link to="/onboarding" className="bg-white text-primary-orange hover:bg-highlight-yellow hover:text-midnight text-lg sm:text-xl font-black px-8 sm:px-12 py-4 sm:py-5 rounded-2xl transition-all transform hover:scale-105 shadow-2xl active:scale-95 shadow-orange-glow">
                  Join for Free
                </Link>
                <Link to="/how-it-works" className="glass-dark border-white/20 hover:border-white/50 text-white text-lg sm:text-xl font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-2xl transition-all backdrop-blur-xl">
                  See How It Works
                </Link>
              </div>
            </div>
            <div className="hidden lg:block animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="relative">
                <div className="absolute -inset-10 bg-highlight-yellow/10 blur-[100px] rounded-full" />
                <img
                  src={heroLeadership}
                  alt="Young Leaders Collaborative"
                  className="relative rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] border-4 border-white/10 transform rotate-2 hover:rotate-0 transition-all duration-700"
                />
                <div className="absolute -bottom-10 -left-10 glass p-8 rounded-[2rem] shadow-2xl max-w-xs text-midnight border-white/50 animate-bounce-slow">
                  <p className="text-sm font-black flex items-center gap-3">
                    <span className="w-3 h-3 bg-primary-orange rounded-full animate-pulse" />
                    Live Voting Session Now
                  </p>
                  <p className="text-xs text-gray-500 mt-2 font-bold uppercase tracking-wider">Council of Commerce</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 sm:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-24 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-midnight tracking-tight">A Digital Nation for Growth</h2>
            <div className="h-2 w-20 sm:w-24 bg-primary-orange mx-auto rounded-full shadow-orange-glow" />
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
            {[
              { icon: '🗳️', title: 'Workshops & Elections', desc: 'Youth-led elections and engaging live events that bring learning to life.' },
              { icon: '🦁', title: 'Leadership Skills', desc: 'Practical experience in running departments and making tough decisions.' },
              { icon: '🏛️', title: 'Mini-Society Governance', desc: 'Real elections, voting, and collective problem-solving.' },
              { icon: '💡', title: 'Innovation', desc: 'Building business models and understanding marketplaces.' },
              { icon: '🎭', title: 'Real Fun Projects', desc: 'From digital art to community organizing, real fun projects.' },
              { icon: '📅', title: 'Weekly Live Events', desc: 'Connect with peers across the globe in moderated safe sessions.' },
            ].map((feature, i) => (
              <div key={i} className="group p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-gray-100 bg-neutral-light hover:bg-secondary-pink hover:text-white hover:border-secondary-pink/20 transition-all duration-500 shadow-sm hover:shadow-pink-glow animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="text-4xl sm:text-5xl mb-6 sm:mb-8 group-hover:scale-110 transition-transform inline-block drop-shadow-lg">{feature.icon}</div>
                <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 font-lexend text-midnight group-hover:text-white transition-colors">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-medium group-hover:text-white transition-colors">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Group */}
      <section className="py-20 sm:py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-6 sm:mb-8 text-midnight tracking-tight">Built on Trust and Safety</h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10 sm:mb-16 font-medium max-w-3xl mx-auto">
            Young Microworld isn't just a platform; it's a movement to empower children to think critically and act responsibly. Under the guidance of parents and educators, kids explore a digital world that mirrors the real one.
          </p>
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary-orange/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <img
              src={safetyTrust}
              alt="Safety and Guidance"
              className="relative rounded-[3rem] shadow-2xl border-4 border-white transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-hero-gradient text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,215,0,0.2),transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 font-lexend tracking-tight uppercase">Ready to Lead Your World?</h2>
          <p className="text-xl sm:text-2xl opacity-90 mb-8 sm:mb-12 font-medium">Join thousands of kids building the future today.</p>
          <Link to="/onboarding" className="bg-white text-primary-orange hover:bg-highlight-yellow hover:text-midnight text-xl sm:text-2xl font-black px-10 sm:px-16 py-5 sm:py-6 rounded-2xl transition-all inline-block shadow-2xl transform hover:scale-105 active:scale-95 shadow-orange-glow">
            Start Your Journey 🚀
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
