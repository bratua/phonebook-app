import { useSelector } from 'react-redux';
import { Route, redirect, Redirect, Outlet, Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectToken } from 'redux/auth';

export const PrivateRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const token = useSelector(selectToken);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};
