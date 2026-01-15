
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
    <nav className="bg-midnight text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="w-10 h-10 bg-cyan rounded-lg flex items-center justify-center font-bold text-midnight text-xl transform group-hover:rotate-12 transition-transform">YM</div>
              <span className="font-lexend font-bold text-xl tracking-tight">Young Microworld</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {(user ? authLinks : publicLinks).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path) ? 'text-cyan bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {user ? (
              <div className="flex items-center gap-4 ml-4 pl-4 border-l border-white/20">
                <span className="text-sm font-semibold text-cyan">{user.name}</span>
                <button
                  onClick={onLogout}
                  className="bg-coral hover:bg-coral/80 text-white px-4 py-2 rounded-full text-sm font-bold transition-all shadow-md active:scale-95"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/login" className="text-gray-300 hover:text-white text-sm font-medium px-4">Login</Link>
                <Link to="/onboarding" className="bg-cyan text-midnight hover:bg-white px-6 py-2 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_rgba(0,245,255,0.4)] active:scale-95">
                  Join Now
                </Link>
              </div>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
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
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-midnight/95 backdrop-blur-md`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {(user ? authLinks : publicLinks).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
            >
              {link.name}
            </Link>
          ))}
          {user ? (
            <button onClick={() => { onLogout(); setIsOpen(false); }} className="w-full text-left px-3 py-2 text-coral font-bold">Logout</button>
          ) : (
            <Link to="/onboarding" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-cyan font-bold">Join Now</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
