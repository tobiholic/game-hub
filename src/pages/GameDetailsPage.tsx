import { Box, Heading, Spinner } from '@chakra-ui/react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import useGame from '../hooks/useGame';

const GameDetailsPage = () => {
  //show more / less button
  const [show, setShow] = useState(false);
  const handleShow = () => {
    show ? setShow(false) : setShow(true);
  };

  //get params & data fetch data
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  //creating spinner when loading
  if (isLoading) return <Spinner />;

  //catching error
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Box marginTop={2}>
        <ExpandableText>{game.description_raw}</ExpandableText>
      </Box>
    </>
  );
};

export default GameDetailsPage;
