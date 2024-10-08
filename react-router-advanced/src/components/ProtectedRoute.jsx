import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, isAuthenticated }) {
  let useAuth = { token: true };
  return isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
