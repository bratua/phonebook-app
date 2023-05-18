import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/auth/operations';
import { useAuthState } from 'hooks';
import { PrivateRoute, PublicRoute } from 'components/CustomRouts';

import { Layout } from 'components/Layout';

const Register = lazy(() => import('pages/Register.jsx'));
const Login = lazy(() => import('pages/Login.jsx'));
const Contacts = lazy(() => import('pages/Contacts.jsx'));
const Home = lazy(() => import('pages/Home.jsx'));
const NotFound = lazy(() => import('pages/NotFound.jsx'));

export const App = () => {
  const dispatch = useDispatch();
  const { isUpdating } = useAuthState();

  useEffect(() => {
    dispatch(updateUser());
  }, [dispatch]);

  return isUpdating ? (
    'Getting data'
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route index path="home" element={<Home />} />

          <Route path="" element={<PublicRoute />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route path="" element={<PrivateRoute />}>
            <Route path="contacts" element={<Contacts />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
