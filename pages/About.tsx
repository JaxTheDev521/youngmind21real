
import React from 'react';
import visionFuture from '../assets/vision-future.png';

const About: React.FC = () => {
  return (
    <div className="bg-neutral-light min-h-screen">
      <section className="bg-hero-gradient text-white py-24 sm:py-32 lg:py-48 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.3),transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-24 -left-20 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black font-lexend mb-6 sm:mb-8 tracking-tighter uppercase leading-none">
            Our Sovereign <span className="text-highlight-yellow drop-shadow-orange-glow">Vision</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-3xl text-white/90 font-bold uppercase tracking-[0.2em] max-w-3xl mx-auto italic">
            Empowering children to live leadership, not just learn it.
          </p>
          <div className="h-2 w-24 sm:w-32 bg-white/20 mx-auto rounded-full mt-10 sm:mt-12 shadow-inner" />
        </div>
      </section>

      <section className="py-20 sm:py-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary-pink/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="animate-fade-in text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-midnight font-lexend mb-6 sm:mb-8 tracking-tight uppercase border-l-8 border-secondary-pink pl-6 sm:pl-8 inline-block lg:block">Why Microworld?</h2>
              <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-6 sm:mb-8 font-bold">
                In a rapidly changing world, traditional education often lags behind in teaching critical "soft" skills like governance, ethical decision-making, and entrepreneurial mindset.
              </p>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8 sm:mb-12 font-medium italic">
                We believe that by providing children with a <strong className="text-primary-orange">Mini Digital Society</strong>, they can explore these concepts in a way that is interactive, fun, and profoundly impactful.
              </p>
              <ul className="space-y-4 sm:space-y-6 text-left">
                {[
                  { title: 'Confidence', desc: 'Speaking up and being heard in a community.', color: 'bg-secondary-pink' },
                  { title: 'Responsibility', desc: 'Understanding the impact of decisions on others.', color: 'bg-primary-orange' },
                  { title: 'Innovation', desc: 'Solving real-world problems with creativity.', color: 'bg-highlight-yellow' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 sm:gap-6 group">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${item.color} flex items-center justify-center text-white text-xl sm:text-2xl shadow-lg transform group-hover:rotate-12 transition-transform`}>★</div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-black text-midnight uppercase tracking-wide">{item.title}</h4>
                      <p className="text-sm sm:text-base text-gray-400 font-bold">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative group p-4">
              <div className="absolute -inset-10 bg-primary-orange/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary-pink/10 rounded-full blur-3xl animate-pulse" />
              <img
                src={visionFuture}
                alt="Vision Illustration"
                className="relative rounded-[4rem] shadow-[0_48px_80px_-16px_rgba(249,115,22,0.4)] border-8 border-white transition-all duration-700 group-hover:scale-[1.02] group-hover:-rotate-1"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-32 px-4 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-12 sm:mb-20 text-midnight tracking-tighter uppercase italic opacity-20">The Microworld Promise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {[
              { icon: '🛡️', title: 'Safe Haven', desc: 'Fully moderated sessions with sovereign parent oversight.', color: 'border-primary-orange' },
              { icon: '🌍', title: 'Global Alliance', desc: 'Connect with curious minds from across the globe.', color: 'border-secondary-pink' },
              { icon: '📜', title: 'Real Prestige', desc: 'Earn recognized certificates and build a portfolio.', color: 'border-highlight-yellow' },
            ].map((promise, i) => (
              <div key={i} className={`glass p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl border-t-8 ${promise.color} hover:-translate-y-2 transition-all duration-500 animate-fade-in`} style={{ animationDelay: `${i * 200}ms` }}>
                <div className="text-5xl sm:text-6xl mb-6 sm:mb-8 transform hover:scale-110 transition-transform inline-block drop-shadow-xl">{promise.icon}</div>
                <h4 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-midnight uppercase tracking-tight">{promise.title}</h4>
                <p className="text-sm sm:text-base text-gray-500 font-bold leading-relaxed">{promise.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
