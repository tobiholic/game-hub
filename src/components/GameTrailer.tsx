import useGameMovies from '../hooks/useGameMovies';
import { Box, Heading } from '@chakra-ui/react';

interface Probs {
  gameId: number;
}

const GameTrailer = ({ gameId }: Probs) => {
  const { data: trailer, isLoading, error } = useGameMovies(gameId);

  if (isLoading) return null;
  if (error) throw error;

  const first = trailer?.results[0];

  return first ? (
    <Box>
      <Heading marginBottom={5} size="lg">
        {first.name}
      </Heading>
      <video
        src={first.data[480]}
        poster={first.preview}
        controls
        width={800}
      />
    </Box>
  ) : null;
};

export default GameTrailer;
