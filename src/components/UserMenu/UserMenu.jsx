import { useAuthState } from 'hooks';
import { logOutUser } from 'redux/auth/operations';
import {
  Button,
  InputRightAddon,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Stack,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  const {
    user: { name, email },
  } = useAuthState();
  return (
    <>
      {name} {email}
      <Button type="button" onClick={handleLogOut}>
        Log Out
      </Button>
    </>
  );
};
