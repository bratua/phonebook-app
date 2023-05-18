import { useAuthState } from 'hooks';
import { UserMenu } from 'components/UserMenu';
import { AuthMenu } from 'components/AuthMenu';
import { MainMenu } from 'components/MainMenu';
import {
  useColorMode,
  Button,
  Box,
  Stack,
  Spacer,
  Flex,
} from '@chakra-ui/react';

export const AppMenu = () => {
  const { isLoggedIn } = useAuthState();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="header"
      width={[300, 480, 800]}
      bg={['red.300', 'green.300', 'blue.300']}
      justify={[null, 'space-between']}
      direction={['row']}
    >
      {<MainMenu />}
      {/* {<Spacer />} */}
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
      {/* <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button> */}
    </Flex>
  );
};
