import { Flex, Heading, HStack, Link, Text } from '@chakra-ui/react';
import { TbHeartHandshake } from 'react-icons/tb';
import { GameQuery } from '../App';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';

interface Probs {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Probs) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );

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
