import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Game from '../entities/Game';
import getCroppedImageUrl from '../services/image-url';
import BadgeCritic from './BadgeCritic';
import Emoji from './Emoji';
import PlatformIconList from './PlatformIconList';
import useGameQueryStore from '../gameQueryStore';

interface Probs {
  game: Game;
}

const GamesCard = ({ game }: Probs) => {
  const setGameId = useGameQueryStore((s) => s.setGameId);
  return (
    <>
      <Card height="100%">
        <Link onClick={() => setGameId(game.id)} to={'/games/' + game.slug}>
          <Image
            src={getCroppedImageUrl(game.background_image)}
            transition="transform 0.2s easeInOut"
            _hover={{ transform: 'scale(1.01)' }}
          />
        </Link>
        {/* <Navigate to={`/games/${game.name}`} /> */}
        <CardBody>
          <HStack justifyContent="space-between" marginY="5px" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconList>
            <BadgeCritic score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">
            <Link to={'/games/' + game.slug}>{game.name}</Link>
            <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GamesCard;
