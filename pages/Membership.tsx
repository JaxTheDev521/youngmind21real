import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

const Membership: React.FC = () => {
  const plans = [
    {
      name: 'Free Citizen',
      price: '$0',
      period: 'Forever',
      description: 'Start your journey in the microworld for free.',
      features: ['Basic Onboarding', 'Join 1 Department', 'Public Elections', 'Weekly Community Sessions', 'Digital Resource Library'],
      cta: 'Join for Free',
      highlight: false,
      color: 'bg-white text-midnight border-gray-200'
    },
    {
      name: 'Premium Leader',
      price: '$50',
      period: 'per year',
      description: 'Unlock advanced entrepreneurship and governance tools.',
      features: ['All Citizen Features', 'Join Unlimited Departments', 'Run as Election Candidate', 'Exclusive Workshops', '1-on-1 Mentorship Sessions', 'Premium Resource Toolkits'],
      cta: 'Get Premium',
      highlight: true,
      color: 'bg-midnight text-white border-midnight'
    }
  ];

  return (
    <div className="bg-neutral-light py-16 sm:py-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-lexend mb-4 sm:mb-6 text-midnight tracking-tight">Choose Your Path</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">Every child can lead. Pick a membership that fits your goals and start building your future today.</p>
          <div className="h-2 w-20 sm:w-24 bg-primary-orange mx-auto rounded-full mt-6 sm:mt-8 shadow-orange-glow" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-stretch max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div key={i} className={`rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-10 md:p-12 border transition-all duration-500 flex flex-col hover:-translate-y-2 animate-fade-in ${plan.highlight
              ? 'glass-dark text-white border-white/10 shadow-2xl sm:scale-105 z-10'
              : 'glass text-midnight border-white/50 shadow-xl hover:shadow-orange-glow/10'}`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="mb-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl sm:text-3xl font-bold font-lexend">{plan.name}</h3>
                  {plan.highlight && <span className="px-3 py-1 sm:px-4 sm:py-1.5 bg-highlight-yellow text-midnight rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest animate-pulse">Most Popular</span>}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-6xl font-black">{plan.price}</span>
                  <span className="text-sm sm:text-base opacity-60 font-medium">{plan.period}</span>
                </div>
                <p className="mt-4 sm:mt-6 opacity-80 leading-relaxed text-base sm:text-lg font-medium">{plan.description}</p>
              </div>

              <ul className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-4 text-base font-medium">
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-md ${plan.highlight ? 'bg-highlight-yellow text-midnight' : 'bg-primary-orange text-white'}`}>✓</span>
                    <span className="opacity-90">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/onboarding"
                className={`block text-center py-4 sm:py-5 rounded-2xl font-bold transition-all transform active:scale-95 shadow-2xl text-base sm:text-lg tracking-wide ${plan.highlight
                  ? 'bg-primary-orange text-white hover:bg-highlight-yellow hover:text-midnight shadow-orange-glow'
                  : 'bg-white text-midnight hover:bg-gray-50 border border-gray-100'
                  }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Sticky CTA for Mobile/Scroll */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 md:hidden w-[90%] animate-fade-in" style={{ animationDelay: '1s' }}>
          <Link to="/onboarding" className="flex items-center justify-center gap-4 w-full text-center py-4 glass-dark text-white rounded-2xl font-bold shadow-2xl border border-white/20 backdrop-blur-xl">
            Get Started Now <Rocket size={20} className="text-primary-orange" />
          </Link>
        </div>

        <div className="mt-20 text-center text-gray-400 text-sm font-medium">
          <p className="max-w-md mx-auto leading-relaxed">Secure payments powered by Stripe. Cancel anytime. <br /> Parent authorization required for all transactions.</p>
        </div>
      </div>
    </div>
  );
};

export default Membership;
