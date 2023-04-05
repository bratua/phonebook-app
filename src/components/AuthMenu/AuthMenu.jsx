import { NavLink } from 'react-router-dom';

export const AuthMenu = () => {
  return (
    <nav style={{ display: 'flex', gap: '5px' }}>
      <NavLink to="register">Sign Up</NavLink>
      <NavLink to="login">Login</NavLink>
    </nav>
  );
};
