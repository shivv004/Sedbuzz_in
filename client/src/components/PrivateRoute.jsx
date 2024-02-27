import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export function DashboardRoute() {
    const {currentUser} = useSelector(state => state.user);
  return currentUser ? <Outlet/> : <Navigate to="/login"/>;
}
export function LoginRoute() {
    const {currentUser} = useSelector(state => state.user);
  return currentUser ? <Navigate to="/dashboard?tab=profile"/> : <Outlet/>;
}
export function SignupRoute() {
    const {currentUser} = useSelector(state => state.user);
  return currentUser ? <Navigate to="/dashboard?tab=profile"/> : <Outlet/>;
}
