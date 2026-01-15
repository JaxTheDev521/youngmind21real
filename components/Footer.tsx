
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-cyan rounded flex items-center justify-center font-bold text-midnight">YM</div>
              <span className="font-lexend font-bold text-white tracking-tight">Young Microworld</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Empowering the next generation of leaders through a mini digital society. Safe, fun, and transformative.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/how-it-works" className="hover:text-cyan transition-colors">How It Works</Link></li>
              <li><Link to="/programs" className="hover:text-cyan transition-colors">Programs</Link></li>
              <li><Link to="/membership" className="hover:text-cyan transition-colors">Membership</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-cyan transition-colors">Our Vision</Link></li>
              <li><Link to="/events" className="hover:text-cyan transition-colors">Events</Link></li>
              <li><Link to="/voting" className="hover:text-cyan transition-colors">Governance</Link></li>
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
