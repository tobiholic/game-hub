import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Box } from '@chakra-ui/react';

const Layout = () => {
  return (
    <Box
      paddingX={{
        base: '0px',
        md: '10px',
        lg: '50px',
      }}
    >
      <NavBar />
      <Outlet />
    </Box>
  );
};

export default Layout;
