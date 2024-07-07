import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GamesCard from './GamesCard';

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding={15} spacing={10}>
        {games.map((game) => (
          <GamesCard key={game.id} games={game}></GamesCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
