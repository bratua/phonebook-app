import { NavLink } from 'react-router-dom';
import { Button, Box, Stack, Flex } from '@chakra-ui/react';

export const MainMenu = () => {
  return (
    <Flex justify={['space-between', null]} gap={[null, 2]} alignItems="center">
      {/* <Button as={NavLink} to="home">
        Home
      </Button>
      <Button as={NavLink} to="contacts">
        Contacts
      </Button> */}
      <Box p={2}>
        <NavLink to="home">Home</NavLink>
      </Box>
      <Box p={2}>
        <NavLink to="contacts">Contacts</NavLink>
      </Box>
    </Flex>
  );
};
