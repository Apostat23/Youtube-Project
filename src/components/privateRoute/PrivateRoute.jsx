import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route } from 'react-router-dom';
import Login from '../../pages/Login';

export const PrivateRoute = ({children}) => {
  const { user } = useSelector(state => state.session);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}
