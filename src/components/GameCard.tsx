import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import getCroppedImageUrl from '../services/image-url';
import BadgeCritic from './BadgeCritic';
import Emoji from './Emoji';
import PlatformIconList from './PlatformIconList';

interface Probs {
  game: Game;
}

const GamesCard = ({ game }: Probs) => {
  return (
    <>
      <Card height="100%">
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" marginY="5px" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconList>
            <BadgeCritic score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">
            {game.name}
            <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GamesCard;
