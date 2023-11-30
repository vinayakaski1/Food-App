// PrivateRoute.js
import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(
    (state) => state?.email && state?.password
  );
  const state = useSelector((state) => state);
  console.log('STATTA', state);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
