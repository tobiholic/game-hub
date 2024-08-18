import { SimpleGrid, Text } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

interface Probs {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Probs) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding={5}
      spacing={7}
      width="100%"
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton key={skeleton}></GameCardSkeleton>
          </GameCardContainer>
        ))}
      {data?.results.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard key={game.id} game={game}></GameCard>
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
