import { AuthMenu } from 'components/AuthMenu';
import { NavLink } from 'react-router-dom';

export const AppMenu = () => {
  return (
    <header
      style={{
        display: 'flex',
        gap: '25px',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '5px',
        }}
      >
        <NavLink to="home">Home</NavLink>
        <NavLink to="contacts">Contacts</NavLink>
      </div>

      <AuthMenu />
    </header>
  );
};
