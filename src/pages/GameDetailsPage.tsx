import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameScreenshots from '../components/GameScreenshots';
import GameTrailer from '../components/GameTrailer';
import ReleaseHeadingDate from '../components/ReleaseHeadingDate';
import useGame from '../hooks/useGame';
import GameDetailsPageSkeleton from './GameDetailsPageSkeleton';

const GameDetailsPage = () => {
  //get params & data fetch data
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  // creating spinner when loading
  if (isLoading) return <GameDetailsPageSkeleton></GameDetailsPageSkeleton>;

  // catching error
  if (error) throw error;

  return (
    <>
      <Box display="flex" alignContent="top">
        <Heading>
          {game!.name}
          <Link to={game!.website} target="_blank">
            <ExternalLinkIcon boxSize={4} mx={2} marginBottom={6} />
          </Link>
        </Heading>
      </Box>
      <ReleaseHeadingDate date={game!.released} />
      <Box marginTop={3}>
        <ExpandableText>{game!.description_raw}</ExpandableText>
      </Box>
      <Box marginTop={10}>
        <GameAttributes game={game!} />
      </Box>
      <SimpleGrid columns={2} gap={10} marginTop={12}>
        <GameTrailer gameId={game!.id} />
        <GameScreenshots gameId={game!.id} gameName={game!.name} />
      </SimpleGrid>
    </>
  );
};

export default GameDetailsPage;
