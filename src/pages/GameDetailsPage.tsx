import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { Text, Heading, Spinner } from '@chakra-ui/react';

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  //creating spinner when loading
  if (isLoading) return <Spinner />;

  //catching error
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text marginTop={3}>{game.description_raw}</Text>
    </>
  );
};

export default GameDetailsPage;
