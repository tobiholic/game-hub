import { SunIcon } from '@chakra-ui/icons';
import { Button, Center, Heading, Text, VStack } from '@chakra-ui/react';
import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error))
    return (
      <>
        <Center height={'100vh'}>
          <VStack>
            <Heading>Ooops, sorry! This site does not exist.</Heading>
            <Text fontSize={17}>Just try again and go back to start!</Text>
            <Button leftIcon={<SunIcon />} marginTop={5}>
              <Link to="/">BACK HOME</Link>
            </Button>
          </VStack>
        </Center>
      </>
    );
  else
    return (
      <>
        <Center height={'100vh'}>
          <VStack>
            <Heading>Ooops, sorry, an error occured!</Heading>
            <Text fontSize={17}>Just try again and go back to start!</Text>
            <Button leftIcon={<SunIcon />} marginTop={5}>
              <Link to="/">BACK HOME</Link>
            </Button>
          </VStack>
        </Center>
      </>
    );
};

export default ErrorPage;
