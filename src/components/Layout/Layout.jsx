import { Flex, flexbox } from '@chakra-ui/react';
import { AppMenu } from 'components/AppMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <AppMenu />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
