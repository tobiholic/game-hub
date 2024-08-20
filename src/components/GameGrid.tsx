import {
  Alert,
  AlertIcon,
  Button,
  Center,
  SimpleGrid,
  Spinner,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { GameQuery } from '../App';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

interface Probs {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Probs) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  if (error)
    return (
      <Center margin={10}>
        <Alert status="error" borderRadius={5}>
          <AlertIcon />
          {typeof error === 'string'
            ? error
            : 'An error occurred. Please try again.'}
        </Alert>
      </Center>
    );

  const fetchGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      <InfiniteScroll
        dataLength={fetchGamesCount}
        next={() => fetchNextPage()}
        hasMore={!!hasNextPage}
        loader={
          <Center>
            <Button marginY={3} spinnerPlacement="end" variant="outline">
              <Spinner color="grey" marginEnd={3} />
              {isFetchingNextPage ? 'Loading...' : 'Load more'}
            </Button>
          </Center>
        }
        endMessage={!error ? '' : <p>Yay! You have made it to the end</p>}
      >
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
      </InfiniteScroll>
      {/* <Center>
    
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
      </Center> */}
    </>
  );
};

export default GameGrid;
