
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
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step === s ? 'bg-cyan text-midnight ring-4 ring-cyan/20' : step > s ? 'bg-midnight text-white' : 'bg-gray-200 text-gray-500'}`}>
            {step > s ? '✓' : s}
          </div>
          <span className="text-[10px] mt-1 uppercase font-bold text-gray-400">Step {s}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-midnight p-8 text-white text-center">
          <h2 className="text-3xl font-bold font-lexend">Welcome to Microworld</h2>
          <p className="text-gray-300 mt-2">Let's set up your mini-citizen profile</p>
        </div>
        
        <div className="p-8 lg:p-12">
          <StepIndicator />

          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-xl font-bold mb-4">Step 1: Child & Parent Info</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Child's Nickname</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-cyan focus:border-cyan" placeholder="CoolLeader123" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                    <input type="number" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-cyan focus:border-cyan" placeholder="9" required />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Parent's Email</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-cyan focus:border-cyan" placeholder="parent@example.com" required />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-xl font-bold mb-4">Step 2: Login Credentials</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Choose Username</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-cyan focus:border-cyan" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Create Password</label>
                    <input type="password" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-cyan focus:border-cyan" required />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-xl font-bold mb-4">Step 3: Department Selection</h3>
                <p className="text-sm text-gray-500 mb-4">Where do you want to start your career?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Commerce & Trade', 'Justice & Ethics', 'Innovation & Tech', 'Arts & Culture'].map((dept) => (
                    <label key={dept} className="relative flex items-center p-4 border rounded-xl cursor-pointer hover:bg-gray-50 peer-checked:bg-cyan/10 peer-checked:border-cyan">
                      <input type="radio" name="dept" value={dept} className="h-4 w-4 text-cyan border-gray-300" />
                      <span className="ml-3 font-medium text-gray-900">{dept}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-xl font-bold mb-4">Step 4: Parent Consent</h3>
                <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100 text-sm text-gray-700 leading-relaxed">
                  <p className="mb-4">Young Microworld is a community designed for safety. We require parent/guardian oversight for all activities.</p>
                  <label className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5 text-midnight rounded border-gray-300" required />
                    <span>I am the parent/guardian of this child and I agree to the <strong className="text-midnight">Terms of Service</strong> and <strong className="text-midnight">Privacy Policy</strong>.</span>
                  </label>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="text-center py-10 animate-in zoom-in duration-500">
                <div className="text-6xl mb-6">🎉</div>
                <h3 className="text-2xl font-bold text-midnight mb-2">You're All Set!</h3>
                <p className="text-gray-600">Click the button below to enter your new digital world.</p>
              </div>
            )}

            <div className="flex justify-between pt-8">
              {step > 1 && step < 5 && (
                <button type="button" onClick={handleBack} className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 font-bold hover:bg-gray-50 transition-colors">
                  Back
                </button>
              )}
              {step < 5 ? (
                <button type="button" onClick={handleNext} className="ml-auto px-10 py-3 bg-midnight text-white rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg">
                  Continue
                </button>
              ) : (
                <button type="submit" className="w-full py-4 bg-cyan text-midnight rounded-xl font-bold hover:bg-white border-2 border-cyan transition-all shadow-xl text-lg">
                  Enter Dashboard
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
