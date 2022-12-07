import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// import Auth from './Authentication';
import { useSelector } from 'react-redux';

const PublicRouter: React.FC = () => {
  const isLoggedIn = true;
  const store = useSelector((state: any) => state.isLoggedIn);
  console.log('Store public', store);
  return isLoggedIn == true ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRouter;
