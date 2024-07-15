import { Heading, HStack, Link, Text } from '@chakra-ui/react';
import { GameQuery } from '../App';
import { TbHeartHandshake } from 'react-icons/tb';

interface Probs {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Probs) => {
  //Games
  // Action Games
  //Xbox Games
  //Xbox Action Games

  const heading = `${gameQuery.platform?.name || ''} ${
    gameQuery.genre?.name || ''
  } Games `;

  return (
    <>
      <HStack justifyContent="space-between" paddingRight={2}>
        <Heading fontSize="6xl" as="h1">
          {heading}
        </Heading>

        <HStack>
          <Text>Created with</Text>
          <TbHeartHandshake size={20} />
          <Text>by</Text>
          <Link color="#3D789D" href="https://www.tobischmid.com" target="_blank">
            {' '}
            Tobias Schmid
          </Link>
        </HStack>
      </HStack>
    </>
  );
};

export default GameHeading;
