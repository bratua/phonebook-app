import { useAuthState } from 'hooks';
import { logOutUser } from 'redux/auth/operations';
import {
  Avatar,
  Button,
  Box,
  Flex,
  Text,
  HStack,
  InputRightAddon,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Stack,
  Icon,
  useMediaQuery,
} from '@chakra-ui/react';
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { FiLogOut } from 'react-icons/fi';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOutUser());
  };
  const [isNotMobile] = useMediaQuery('(min-width: 540px)');
  console.log('isNotMobile ', isNotMobile);

  const {
    user: { name, email },
  } = useAuthState();

  return (
    <Flex
      bgColor="yellow.400"
      justify={['space-between', 'right']}
      gap={[1, 2]}
      alignItems="center"
      pl={2}
      pr={2}
    >
      {isNotMobile && <Avatar size="sm" name={name} />}
      {<Text fontSize="sm">{name}</Text>}
      <Button
        width={8}
        height={8}
        type="button"
        onClick={handleLogOut}
        bgColor="grey.300"
      >
        <Icon as={FiLogOut} width={4} height={4} />
      </Button>
    </Flex>
  );
};
