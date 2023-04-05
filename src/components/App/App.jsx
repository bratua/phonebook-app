import { Layout } from 'components/Layout';
import { Route, Routes } from 'react-router-dom';
import { Register } from 'pages/Register.jsx';
import { Login } from 'pages/Login.jsx';

export const App = () => {
  return (
    <>
      <div>APP</div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<p>Home Page</p>} />
          <Route index path="home" element={<p>Home Page</p>} />
          <Route path="contacts" element={<p>Contacts Page</p>} />

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};
