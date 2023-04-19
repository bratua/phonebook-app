import { Layout } from 'components/Layout';
import { Route, Routes } from 'react-router-dom';
import { Register } from 'pages/Register.jsx';
import { Login } from 'pages/Login.jsx';
import { Contacts } from 'pages/Contacts.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/auth/operations';
import { useAuthState } from 'hooks';
import { getAllContacts } from 'redux/contacts';

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
      <div>APP</div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<p>Home Page</p>} />
          <Route index path="home" element={<p>Home Page</p>} />
          <Route path="contacts" element={<Contacts />} />

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};
