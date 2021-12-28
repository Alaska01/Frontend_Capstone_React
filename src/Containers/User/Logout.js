import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authenticate from '../../Redux/Actions/authenticate';

function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.removeItem('token');
    dispatch(authenticate());
  }, []);

  return (
    <Navigate
      to={{
        pathname: '/',
        message: "You've been signed out!",
      }}
    />
  );
}

export default Logout;
