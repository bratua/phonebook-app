import { Flex, Container } from '@chakra-ui/react';
import { AppMenu } from 'components/AppMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Container
      maxWidth={[320, 480, 768, 1000]}
      minWidth={320}
      // bg={['red.300', 'green.300', 'blue.300', 'yellow.300']}
      p={[2, 4]}
      // m={[0, 'auto']}
    >
      <AppMenu />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
