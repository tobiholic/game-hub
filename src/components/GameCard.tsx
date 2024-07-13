import { Game } from '../hooks/useGames';
import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import BadgeCritic from './BadgeCritic';
import getCroppedImageUrl from '../services/image-url';

interface Probs {
  game: Game;
}

const GamesCard = ({ game }: Probs) => {
  return (
    <>
      <Card height="100%">
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <HStack justifyContent="space-between" marginY="5px">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconList>
            <BadgeCritic score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GamesCard;
