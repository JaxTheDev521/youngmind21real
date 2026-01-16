
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserRole } from '../types';

interface LoginProps {
  onLogin: (role: UserRole) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<UserRole>(UserRole.MEMBER);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(role);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-neutral-light flex items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-orange/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary-pink/5 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4" />

      <div className="max-w-md w-full glass rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl overflow-hidden border-white/50 animate-fade-in relative z-10 hover:shadow-orange-glow/10 transition-all duration-500">
        <div className="bg-hero-gradient p-8 sm:p-10 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.2),transparent_70%)]" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16 blur-xl" />
          <h2 className="text-3xl sm:text-4xl font-black font-lexend relative z-10 tracking-tight uppercase">Citizen Portal</h2>
          <p className="text-white/80 mt-2 sm:mt-3 text-base sm:text-lg font-medium relative z-10 italic">Enter your digital world</p>
        </div>
        <form onSubmit={handleSubmit} className="p-8 sm:p-10 space-y-6 sm:space-y-8">
          <div className="space-y-2">
            <label className="block text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Account Role</label>
            <div className="relative group">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as UserRole)}
                className="w-full px-5 py-4 bg-neutral-light/50 border border-gray-100 rounded-2xl font-bold text-midnight focus:ring-4 focus:ring-primary-orange/10 focus:border-primary-orange outline-none transition-all appearance-none cursor-pointer"
              >
                <option value={UserRole.MEMBER}>Young Leader (Citizen)</option>
                <option value={UserRole.ADMIN}>Governor (Admin)</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-primary-orange font-bold">↓</div>
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 bg-neutral-light/50 border border-gray-100 rounded-2xl font-bold text-midnight focus:ring-4 focus:ring-primary-orange/10 focus:border-primary-orange outline-none transition-all"
              placeholder="leader@microworld.com"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Security Key</label>
            <input
              type="password"
              required
              className="w-full px-5 py-4 bg-neutral-light/50 border border-gray-100 rounded-2xl font-bold text-midnight focus:ring-4 focus:ring-primary-orange/10 focus:border-primary-orange outline-none transition-all"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="w-full py-4 sm:py-5 bg-primary-orange text-white rounded-2xl font-black text-base sm:text-lg hover:bg-highlight-yellow hover:text-midnight transition-all shadow-2xl shadow-orange-glow active:scale-95 uppercase tracking-wide">
            Access Dashboard 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

