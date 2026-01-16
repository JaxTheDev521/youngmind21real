
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 bg-primary-orange rounded-lg flex items-center justify-center font-bold text-white transition-all group-hover:rotate-6">
                YM
              </div>
              <span className="font-['Pacifico',cursive] text-2xl tracking-wide">
                <span className="text-blue-400">Young</span>{' '}
                <span className="text-primary-orange">Microworld</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Empowering the next generation of leaders through a mini digital society. Safe, fun, and transformative.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/how-it-works" className="hover:text-primary-orange transition-colors">How It Works</Link></li>
              <li><Link to="/programs" className="hover:text-primary-orange transition-colors">Programs</Link></li>
              <li><Link to="/membership" className="hover:text-primary-orange transition-colors">Membership</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary-orange transition-colors">Our Vision</Link></li>
              <li><Link to="/events" className="hover:text-primary-orange transition-colors">Events</Link></li>
              <li><Link to="/voting" className="hover:text-primary-orange transition-colors">Governance</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>hello@youngmicroworld.com</li>
              <li>Safety Center</li>
              <li>Parent Guide</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Young Microworld. All rights reserved. Built with pride for the future.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
