import { Flex, Heading, HStack, Link, Text } from '@chakra-ui/react';
import { TbHeartHandshake } from 'react-icons/tb';
import useGameQueryStore from '../gameQueryStore';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';

const GameHeading = () => {
  //genre
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  //platform
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games `;

  return (
    <>
      <Flex
        flexDirection={{
          base: 'column',
          lg: 'row',
        }}
        justifyContent={{
          base: 'space-around',
          lg: 'space-between',
        }}
        paddingRight={2}
      >
        <Heading fontSize="6xl" as="h1">
          {heading}
        </Heading>

        <HStack>
          <Text>Created with</Text>
          <TbHeartHandshake size={20} />
          <Text>by</Text>
          <Link
            color="#3D789D"
            href="https://www.tobischmid.com"
            target="_blank"
          >
            {' '}
            Tobias Schmid
          </Link>
        </HStack>
      </Flex>
    </>
  );
};

export default GameHeading;
