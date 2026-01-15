
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
    <div className="min-h-screen bg-neutral-light flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="bg-hero-gradient p-8 text-white text-center relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
          <h2 className="text-2xl font-bold font-lexend relative z-10">Citizen Portal</h2>
          <p className="text-white/80 mt-2 text-sm relative z-10">Enter your digital world</p>
        </div>
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Account Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as UserRole)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 font-medium focus:ring-2 focus:ring-primary-orange/50 focus:border-primary-orange outline-none transition-all"
            >
              <option value={UserRole.MEMBER}>Young Leader (Citizen)</option>
              <option value={UserRole.ADMIN}>Governor (Admin)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-primary-orange/50 focus:border-primary-orange outline-none transition-all"
              placeholder="leader@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
            <input
              type="password"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-primary-orange/50 focus:border-primary-orange outline-none transition-all"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="w-full py-4 bg-primary-orange text-white rounded-xl font-bold hover:bg-primary-orange/90 transition-all shadow-xl shadow-orange-glow active:scale-95">
            Login to Dashboard
          </button>
          <div className="text-center">
            <Link to="/onboarding" className="text-sm font-bold text-gray-400 hover:text-secondary-pink transition-colors">New here? Start your citizenship →</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
