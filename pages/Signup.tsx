
import React from 'react';
import { Navigate } from 'react-router-dom';

const Signup: React.FC<{ onSignup: () => void }> = () => {
  // Signup is handled through the multi-step onboarding process for better conversion.
  return <Navigate to="/onboarding" />;
};

export default Signup;
