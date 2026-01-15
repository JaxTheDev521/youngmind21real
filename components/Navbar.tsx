
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { User, UserRole } from '../types';

interface NavbarProps {
  user: User | null;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const publicLinks = [
    { name: 'About', path: '/about' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Programs', path: '/programs' },
    { name: 'Membership', path: '/membership' },
  ];

  const authLinks = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Events', path: '/events' },
    { name: 'Resources', path: '/resources' },
    { name: 'Voting', path: '/voting' },
  ];

  if (user?.role === UserRole.ADMIN) {
    authLinks.push({ name: 'Admin', path: '/admin' });
  }

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="glass sticky top-0 z-50 shadow-sm border-b border-white/20 bg-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-yellow-400">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 group transition-transform hover:scale-105 active:scale-95">
              <div className="w-12 h-12 bg-hero-gradient rounded-xl flex items-center justify-center font-bold text-white text-xl transform group-hover:rotate-6 transition-all shadow-orange-glow">
                YM
              </div>
              <span className="font-['Pacifico',cursive] text-3xl tracking-wide">
                <span className="text-blue-600">Young</span>{' '}
                <span className="text-primary-orange">Microworld</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {(user ? authLinks : publicLinks).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${isActive(link.path)
                  ? 'text-primary-orange bg-orange-50/50'
                  : 'text-gray-600 hover:text-primary-orange hover:bg-orange-50/30'
                  }`}
              >
                {link.name}
              </Link>
            ))}

            {user ? (
              <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-100">
                <div className="flex flex-col items-end">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{user.membership_type}</span>
                  <span className="text-sm font-bold text-midnight">{user.name}</span>
                </div>
                <button
                  onClick={onLogout}
                  className="bg-secondary-pink hover:bg-secondary-pink/90 text-white px-5 py-2 rounded-full text-xs font-bold transition-all shadow-md active:scale-95 hover:shadow-pink-glow"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link to="/login" className="text-gray-600 hover:text-primary-orange text-sm font-bold px-4 transition-colors">Login</Link>
                <Link to="/onboarding" className="bg-primary-orange text-white hover:bg-highlight-yellow hover:text-midnight px-8 py-2.5 rounded-full text-sm font-bold transition-all shadow-orange-glow active:scale-95">
                  Join Now
                </Link>
              </div>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-500 hover:text-primary-orange hover:bg-orange-50/50 focus:outline-none transition-all"
            >
              <span className="sr-only">Open main menu</span>
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden glass border-t border-white/20 animate-fade-in`}>
        <div className="px-4 pt-4 pb-6 space-y-2">
          {(user ? authLinks : publicLinks).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-bold transition-all ${isActive(link.path)
                ? 'text-primary-orange bg-orange-50/50'
                : 'text-gray-600 hover:text-primary-orange hover:bg-orange-50/30'
                }`}
            >
              {link.name}
            </Link>
          ))}
          {user ? (
            <button
              onClick={() => { onLogout(); setIsOpen(false); }}
              className="w-full text-center px-4 py-3 bg-secondary-pink/10 text-secondary-pink rounded-xl font-bold mt-4"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/onboarding"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-3 bg-primary-orange text-white rounded-xl font-bold mt-4 shadow-orange-glow"
            >
              Join Now
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
