
import React from 'react';
import { Link } from 'react-router-dom';

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
    <div className="bg-slate-50 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold font-lexend mb-4">Choose Your Path</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Every child can lead. Pick a membership that fits your goals and start building your future today.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <div key={i} className={`rounded-3xl p-10 border-2 flex flex-col ${plan.color} ${plan.highlight ? 'shadow-2xl scale-105 z-10' : 'shadow-sm'}`}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-sm opacity-60 font-medium">{plan.period}</span>
                </div>
                <p className="mt-4 opacity-80 leading-relaxed text-sm">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs ${plan.highlight ? 'bg-cyan text-midnight' : 'bg-green-100 text-green-600'}`}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                to="/onboarding" 
                className={`block text-center py-4 rounded-xl font-bold transition-all transform active:scale-95 shadow-lg ${
                  plan.highlight ? 'bg-cyan text-midnight hover:bg-white' : 'bg-midnight text-white hover:bg-gray-800'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-gray-400 text-sm">
          <p>Secure payments powered by Stripe. Cancel anytime. <br /> Parent authorization required for all transactions.</p>
        </div>
      </div>
    </div>
  );
};

export default Membership;
