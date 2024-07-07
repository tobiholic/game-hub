import { Game } from '../hooks/useGames';
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';

interface Probs {
  games: Game;
}

const GamesCard = ({ games }: Probs) => {
  return (
    <>
      <Card borderRadius={15} overflow="hidden">
        <Image src={games.background_image} />
        <CardBody>
          <Heading fontSize="2xl">{games.name}</Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GamesCard;
