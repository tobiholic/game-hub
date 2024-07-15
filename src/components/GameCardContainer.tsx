import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Probs {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Probs) => {
  return (
    <Box
      width="100%"
      borderRadius={15}
      overflow="hidden"
      border={0.5}
      boxShadow="2xl"
      borderStyle="solid"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
