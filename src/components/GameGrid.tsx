import { Button, Center, SimpleGrid, Text } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGames, { Game } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';
import React from 'react';
import { FaLaptopHouse } from 'react-icons/fa';

interface Probs {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Probs) => {
  const {
    data,
    error,
    isLoading,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  // if (error) return <Text>{error.message}</Text>;

  return (
    <>
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
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard key={game.id} game={game}></GameCard>
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      <Center>
        {hasNextPage && (
          <Button
            size={'lg'}
            isLoading={isFetchingNextPage ? true : false}
            loadingText={isFetchingNextPage ? 'Loading' : 'Load More'}
            spinnerPlacement="end"
            marginTop={2}
            marginBottom={10}
            onClick={() => fetchNextPage()}
          >
            Load More
          </Button>
        )}
      </Center>
    </>
  );
};

export default GameGrid;
