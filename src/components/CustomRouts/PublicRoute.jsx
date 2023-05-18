import { useSelector } from 'react-redux';
import { Route, redirect, Redirect, Outlet, Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectToken } from 'redux/auth';

export const PublicRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const token = useSelector(selectToken);

  return isLoggedIn ? <Navigate to="/contacts" replace /> : <Outlet />;
};
