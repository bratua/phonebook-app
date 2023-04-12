import { useAuthState } from 'hooks';
import { UserMenu } from 'components/UserMenu';
import { AuthMenu } from 'components/AuthMenu';
import { MainMenu } from 'components/MainMenu';

export const AppMenu = () => {
  const { isLoggedIn } = useAuthState();
  return (
    <header
      style={{
        display: 'flex',
        gap: '25px',
      }}
    >
      {<MainMenu />}
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </header>
  );
};
