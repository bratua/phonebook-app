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
import { FiSun, FiMoon } from 'react-icons/fi';

export const ThemeColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex>
      <Button
        w={9}
        h={9}
        size={'xs'}
        bgColor={'blue.200'}
        onClick={toggleColorMode}
      >
        {colorMode === 'dark' ? <FiSun /> : <FiMoon />}
      </Button>
    </Flex>
  );
};
