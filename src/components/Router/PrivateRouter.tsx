// import React from "react";
import LoginPortal from 'pages/admin/Login/LoginPortal';
// import { Navigate } from 'react-router-dom';
import Auth from './Authentication';
import { useSelector } from 'react-redux';

function PrivateRoute() {
  const store = useSelector((state: any) => state.isLoggedIn);
  console.log('store private', store);
  if (Auth.isAutheticated() === true) {
    return <div>Secured</div>;
  }
  return <LoginPortal />;
}

export default PrivateRoute;
