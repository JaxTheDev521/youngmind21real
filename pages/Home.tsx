
import React from 'react';
import { Link } from 'react-router-dom';
import heroLeadership from '../assets/hero-leadership.png';
import safetyTrust from '../assets/safety-trust.png';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-midnight text-white py-24 lg:py-32">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold font-lexend mb-6 leading-tight">
                Young <span className="text-cyan">Microworld</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed font-light">
                Where Kids Experience the World in a Mini Way. Building leaders, entrepreneurs, and global citizens through active participation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/onboarding" className="bg-cyan text-midnight hover:bg-white text-lg font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-xl">
                  Join for Free
                </Link>
                <Link to="/how-it-works" className="bg-transparent border-2 border-white/30 hover:border-white text-white text-lg font-bold px-8 py-4 rounded-full transition-all">
                  See How It Works
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-cyan/20 blur-3xl rounded-full" />
                <img
                  src={heroLeadership}
                  alt="Young Leaders Collaborative"
                  className="relative rounded-3xl shadow-2xl border-4 border-white/10"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs text-midnight">
                  <p className="text-sm font-bold flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Live Voting Session Now
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Join the Council of Commerce</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">A Digital Nation for Growth</h2>
            <div className="h-1.5 w-24 bg-cyan mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🦁', title: 'Leadership & Life Skills', desc: 'Practical experience in running departments and making tough decisions.' },
              { icon: '🏛️', title: 'Mini-Society Governance', desc: 'Real elections, voting, and collective problem-solving.' },
              { icon: '💡', title: 'Entrepreneurship', desc: 'Building business models and understanding marketplaces.' },
              { icon: '🎭', title: 'Creative Projects', desc: 'From digital art to community organizing, real fun projects.' },
              { icon: '📅', title: 'Weekly Live Events', desc: 'Connect with peers across the globe in moderated safe sessions.' },
              { icon: '🏆', title: 'Achievement Badges', desc: 'Earn recognition for your contributions and skill-building.' },
            ].map((feature, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-midnight hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-500 group-hover:text-gray-300 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Group */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Built on Trust and Safety</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Young Microworld isn't just a platform; it's a movement to empower children to think critically and act responsibly. Under the guidance of parents and educators, kids explore a structured digital world that mirrors the real one—providing a safe space to fail, learn, and succeed.
          </p>
          <img
            src={safetyTrust}
            alt="Safety and Guidance"
            className="rounded-3xl shadow-lg border border-gray-200"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-coral py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 font-lexend">Ready to Lead Your World?</h2>
          <p className="text-xl opacity-90 mb-10">Join thousands of kids building the future today.</p>
          <Link to="/onboarding" className="bg-white text-coral hover:bg-midnight hover:text-white text-xl font-bold px-12 py-5 rounded-full transition-all inline-block shadow-2xl">
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
