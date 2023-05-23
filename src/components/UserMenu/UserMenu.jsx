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
    user: { name },
  } = useAuthState();

  return (
    <Flex
      justify={['space-between', 'right']}
      gap={[1, 2]}
      alignItems="center"
      // pl={2}
      // pr={2}
    >
      {/* {<Avatar size={'xs'} name={name} />} */}
      {isNotMobile && <Avatar size={'xs'} name={name} />}
      {<Text fontSize="xs">{name}</Text>}
      <Button
        w={9}
        h={9}
        bgColor={'blue.200'}
        size={'xs'}
        type="button"
        onClick={handleLogOut}
      >
        <FiLogOut />
      </Button>
    </Flex>
  );
};
