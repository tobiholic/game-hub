import { AspectRatio, Box, Heading, Spinner } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import useGame from '../hooks/useGame';
import GameAttributes from '../components/GameAttributes';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import ReleaseHeadingDate from '../components/ReleaseHeadingDate';
import GameTrailer from '../components/GameTrailer';

const GameDetailsPage = () => {
  //get params & data fetch data
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  //creating spinner when loading
  if (isLoading) return <Spinner />;

  //catching error
  if (error || !game) throw error;

  return (
    <>
      <Box display="flex" alignContent="top">
        <Heading>
          {game.name}
          <Link to={game.website} target="_blank">
            <ExternalLinkIcon boxSize={4} mx={2} marginBottom={6} />
          </Link>
        </Heading>
      </Box>
      <ReleaseHeadingDate date={game.released} />
      <Box marginTop={3}>
        <ExpandableText>{game.description_raw}</ExpandableText>
      </Box>
      <Box marginTop={10}>
        <GameAttributes game={game} />
      </Box>
      <Box marginTop={12}>
        <GameTrailer gameId={game.id} />
      </Box>
    </>
  );
};

export default GameDetailsPage;
