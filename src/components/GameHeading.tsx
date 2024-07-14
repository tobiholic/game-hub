import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

interface Probs {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Probs) => {
  //Games
  // Action Games
  //Xbox Games
  //Xbox Action Games

  const heading = `${gameQuery.platform?.name || ''} ${
    gameQuery.genre?.name || ''
  } Games `;

  return (
    <Heading fontSize="6xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
