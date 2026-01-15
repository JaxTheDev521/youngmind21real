
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface OnboardingProps {
  onComplete: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete();
    navigate('/dashboard');
  };

  const StepIndicator = () => (
    <div className="flex justify-between items-center mb-8 max-w-md mx-auto">
      {[1, 2, 3, 4, 5].map((s) => (
        <div key={s} className="flex flex-col items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step === s ? 'bg-primary-orange text-white ring-4 ring-primary-orange/20' : step > s ? 'bg-midnight text-white' : 'bg-gray-200 text-gray-500'}`}>
            {step > s ? '✓' : s}
          </div>
          <span className="text-[10px] mt-1 uppercase font-bold text-gray-400">Step {s}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-light flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-orange/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-pink/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-2xl w-full glass rounded-[3rem] shadow-2xl overflow-hidden border-white/50 relative z-10 animate-fade-in hover:shadow-orange-glow/10 transition-all duration-500">
        <div className="bg-hero-gradient p-10 md:p-14 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.2),transparent_70%)]" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16 blur-xl" />
          <h2 className="text-4xl lg:text-5xl font-black font-lexend relative z-10 tracking-tight uppercase">Join Microworld</h2>
          <p className="text-white/80 mt-3 relative z-10 font-bold uppercase tracking-widest text-sm">Become a young digital citizen</p>
        </div>

        <div className="p-10 lg:p-14">
          <StepIndicator />

          <form onSubmit={handleSubmit} className="space-y-10">
            {step === 1 && (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-black mb-8 text-midnight font-lexend uppercase tracking-tight flex items-center gap-3">
                  <span className="w-8 h-8 bg-secondary-pink rounded-lg flex items-center justify-center text-white text-sm">1</span>
                  Citizenship Basics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Leader Nickname</label>
                    <input type="text" className="w-full px-5 py-4 bg-neutral-light/50 border border-gray-100 rounded-2xl font-bold text-midnight focus:ring-4 focus:ring-primary-orange/10 focus:border-primary-orange outline-none transition-all" placeholder="e.g. FutureGovernor" required />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Current Age</label>
                    <input type="number" className="w-full px-5 py-4 bg-neutral-light/50 border border-gray-100 rounded-2xl font-bold text-midnight focus:ring-4 focus:ring-primary-orange/10 focus:border-primary-orange outline-none transition-all" placeholder="9" required />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Parent's Email Address</label>
                    <input type="email" className="w-full px-5 py-4 bg-neutral-light/50 border border-gray-100 rounded-2xl font-bold text-midnight focus:ring-4 focus:ring-primary-orange/10 focus:border-primary-orange outline-none transition-all" placeholder="governor@parent.com" required />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-black mb-8 text-midnight font-lexend uppercase tracking-tight flex items-center gap-3">
                  <span className="w-8 h-8 bg-secondary-pink rounded-lg flex items-center justify-center text-white text-sm">2</span>
                  Security Keys
                </h3>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Username (Login)</label>
                    <input type="text" className="w-full px-5 py-4 bg-neutral-light/50 border border-gray-100 rounded-2xl font-bold text-midnight focus:ring-4 focus:ring-primary-orange/10 focus:border-primary-orange outline-none transition-all" placeholder="Enter your unique handle" required />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Pass-Phrase</label>
                    <input type="password" className="w-full px-5 py-4 bg-neutral-light/50 border border-gray-100 rounded-2xl font-bold text-midnight focus:ring-4 focus:ring-primary-orange/10 focus:border-primary-orange outline-none transition-all" placeholder="••••••••" required />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-black mb-1 text-midnight font-lexend uppercase tracking-tight">Focus Sector</h2>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-8">Where do you want to start making an impact?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Commerce & Trade', 'Justice & Ethics', 'Innovation & Tech', 'Arts & Culture'].map((dept) => (
                    <label key={dept} className="relative group cursor-pointer">
                      <input type="radio" name="dept" value={dept} className="peer hidden" />
                      <div className="p-6 border-2 border-gray-100 rounded-[1.5rem] bg-neutral-light/30 peer-checked:border-primary-orange peer-checked:bg-primary-orange/5 transition-all duration-300 hover:border-primary-orange/30">
                        <span className="font-black text-midnight uppercase tracking-wide flex items-center justify-between">
                          {dept}
                          <div className="w-4 h-4 border-2 border-gray-200 rounded-full peer-checked:bg-primary-orange" />
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-black mb-8 text-midnight font-lexend uppercase tracking-tight">Parent Verification</h3>
                <div className="bg-hero-gradient p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
                  <p className="mb-8 relative z-10 font-bold uppercase tracking-wide leading-relaxed text-sm opacity-90 italic">"Young Microworld is a sovereign community for safety. We require guardian oversight for all leadership activities."</p>
                  <label className="flex items-start gap-5 relative z-10 group cursor-pointer">
                    <input type="checkbox" className="mt-1 h-6 w-6 text-primary-orange rounded-lg border-white/20 bg-white/10 focus:ring-primary-orange transition-all cursor-pointer" required />
                    <span className="font-black uppercase tracking-widest text-xs leading-relaxed">
                      I am the guardian and I agree to the <strong className="text-highlight-yellow hover:underline">Sovereign Rules</strong> and <strong className="text-highlight-yellow hover:underline">Privacy Charter</strong>.
                    </span>
                  </label>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="text-center py-12 animate-fade-in">
                <div className="text-8xl mb-8 transform hover:scale-110 transition-transform duration-500 drop-shadow-2xl">🎉</div>
                <h3 className="text-4xl font-black text-midnight mb-4 font-lexend uppercase tracking-tight">Citizenship Approved!</h3>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-4">You are now a recognized young leader.</p>
                <div className="w-16 h-1 w-full bg-gradient-to-r from-transparent via-primary-orange to-transparent opacity-20" />
              </div>
            )}

            <div className="flex justify-between items-center pt-10 border-t border-gray-100">
              {step > 1 && step < 5 && (
                <button type="button" onClick={handleBack} className="px-10 py-4 glass text-midnight font-black rounded-2xl text-xs uppercase tracking-widest hover:bg-white transition-all active:scale-95">
                  Previous Page
                </button>
              )}
              {step < 5 ? (
                <button type="button" onClick={handleNext} className="ml-auto px-12 py-5 bg-primary-orange text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-highlight-yellow hover:text-midnight transition-all shadow-2xl active:scale-95 shadow-orange-glow">
                  Forward Sequence →
                </button>
              ) : (
                <button type="submit" className="w-full py-6 bg-hero-gradient text-white rounded-[1.5rem] font-black text-xl hover:scale-[1.02] transform transition-all shadow-[0_20px_40px_-10px_rgba(249,115,22,0.4)] flex items-center justify-center gap-4 uppercase tracking-[0.2em] shadow-orange-glow">
                  Initialize Dashboard <span className="text-2xl">🚀</span>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
