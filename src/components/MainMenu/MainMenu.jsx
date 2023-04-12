import { NavLink } from 'react-router-dom';
export const MainMenu = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '5px',
      }}
    >
      <NavLink to="home">Home</NavLink>
      <NavLink to="contacts">Contacts</NavLink>
    </div>
  );
};
