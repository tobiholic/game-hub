import useGamePictures from '../hooks/useGamePictures';
import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Skeleton,
  Spinner,
} from '@chakra-ui/react';

interface Probs {
  gameId: number;
  gameName: string;
}

const GameScreenshots = ({ gameId, gameName }: Probs) => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  const { data: screenshots, isLoading, error } = useGamePictures(gameId);

  if (error) throw error;

  return (
    <>
      <Box>
        <Heading marginBottom={5} size="lg">
          Screenshots
        </Heading>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
          }}
          spacing={5}
        >
          {isLoading
            ? skeletons.map((s) => (
                <Skeleton height={200} key={s} borderRadius={15}>
                  <Box height={200} borderRadius={15}></Box>
                </Skeleton>
              ))
            : screenshots?.results.map((p) => (
                <Image
                  src={p.image}
                  key={p.id}
                  alt={'Picture of' + gameName}
                  borderRadius={5}
                ></Image>
              ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default GameScreenshots;
