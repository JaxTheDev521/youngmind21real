
import React from 'react';
import visionFuture from '../assets/vision-future.png';

const About: React.FC = () => {
  return (
    <div className="bg-neutral-light min-h-screen">
      <section className="bg-hero-gradient text-white py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(255,215,0,0.1),transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold font-lexend mb-6">Our Vision & Mission</h1>
          <p className="text-xl text-white/90">Empowering children to live leadership, not just learn it.</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-midnight font-lexend mb-6 border-l-4 border-secondary-pink pl-4">Why Young Microworld?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                In a rapidly changing world, traditional education often lags behind in teaching critical "soft" skills like governance, ethical decision-making, and entrepreneurial mindset.
              </p>
              <p className="text-gray-600 leading-relaxed mb-10">
                We believe that by providing children with a <strong>Mini Digital Society</strong>, they can explore these concepts in a way that is interactive, fun, and profoundly impactful.
              </p>
              <ul className="space-y-4">
                {[
                  { title: 'Confidence', desc: 'Speaking up and being heard in a community.' },
                  { title: 'Responsibility', desc: 'Understanding the impact of decisions on others.' },
                  { title: 'Innovation', desc: 'Solving real-world problems with creativity.' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded bg-secondary-pink/10 flex items-center justify-center text-secondary-pink">★</div>
                    <div>
                      <h4 className="font-bold text-midnight">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src={visionFuture}
                alt="Vision Illustration"
                className="rounded-3xl shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-midnight">The Microworld Promise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border-b-4 border-primary-orange">
              <div className="text-3xl mb-4">🛡️</div>
              <h4 className="font-bold mb-2">Safe Environment</h4>
              <p className="text-sm text-gray-500">Fully moderated sessions with parent oversight.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border-b-4 border-secondary-pink">
              <div className="text-3xl mb-4">🌍</div>
              <h4 className="font-bold mb-2">Global Peers</h4>
              <p className="text-sm text-gray-500">Connect with curious minds from across the globe.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border-b-4 border-highlight-yellow">
              <div className="text-3xl mb-4">📜</div>
              <h4 className="font-bold mb-2">Real Outcomes</h4>
              <p className="text-sm text-gray-500">Earn certificates and build a portfolio of work.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
