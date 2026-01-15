
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Programs from './pages/Programs';
import Membership from './pages/Membership';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import EventsPage from './pages/EventsPage';
import ResourcesPage from './pages/ResourcesPage';
import VotingPage from './pages/VotingPage';
import AdminPanel from './pages/AdminPanel';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { User, UserRole } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  // Simple mock login for demo purposes
  const handleLogin = (role: UserRole) => {
    setUser({
      id: role === UserRole.ADMIN ? 'admin-1' : 'user-1',
      name: role === UserRole.ADMIN ? 'Admin User' : 'Young Leader',
      email: role === UserRole.ADMIN ? 'admin@youngmind.com' : 'user@youngmind.com',
      role: role,
      is_approved: true,
      membership_type: role === UserRole.PREMIUM ? 'Premium Leader' : 'Free Citizen',
      department: 'Innovation & Tech',
      linked_child_profiles: role === UserRole.MEMBER || role === UserRole.PREMIUM ? ['p1'] : []
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar user={user} onLogout={handleLogout} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/onboarding" element={<Onboarding onComplete={() => handleLogin(UserRole.MEMBER)} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup onSignup={() => handleLogin(UserRole.MEMBER)} />} />

            {/* Protected Routes */}
            <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} />
            <Route path="/events" element={user ? <EventsPage user={user} /> : <Navigate to="/login" />} />
            <Route path="/resources" element={user ? <ResourcesPage user={user} /> : <Navigate to="/login" />} />
            <Route path="/voting" element={user ? <VotingPage user={user} /> : <Navigate to="/login" />} />
            <Route path="/admin" element={user?.role === UserRole.ADMIN ? <AdminPanel /> : <Navigate to="/dashboard" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
