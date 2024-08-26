import { Box, Button } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Probs {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Probs) => {
  return (
    <Box
      transition="transform 0.2s ease-in-out"
      _hover={{ transform: 'translateY(-10px)', boxShadow: '2xl' }}
      overflow="hidden"
      borderRadius={15}
      border={0.5}
      boxShadow="xl"
      borderStyle="solid"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
