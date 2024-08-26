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
      <Box
        paddingX={{
          base: '0px',
          md: '10px',
          lg: '20px',
        }}
        paddingY={{
          base: '0px',
          md: '10px',
          lg: '30px',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
