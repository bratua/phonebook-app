import { useAuthState } from 'hooks';
import { UserMenu } from 'components/UserMenu';
import { AuthMenu } from 'components/AuthMenu';
import { MainMenu } from 'components/MainMenu';
import {
  useColorMode,
  Button,
  Box,
  Stack,
  HStack,
  VStack,
  Spacer,
  Flex,
  Switch,
  FormLabel,
  Divider,
} from '@chakra-ui/react';
import { ThemeColorModeSwitcher } from 'components/ThemeColorModeSwitcher';

export const AppMenu = () => {
  const { isLoggedIn } = useAuthState();

  return (
    <Flex
      as="header"
      justify="space-between"
      direction="row"
      alignItems="center"
      mb={2}
      bgColor={'blue.300'}
      p={1}
    >
      {<ThemeColorModeSwitcher />}
      {<MainMenu />}
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </Flex>
  );
};
