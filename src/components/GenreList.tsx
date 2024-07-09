import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

const GenreList = () => {
  const { data } = useGenres();

  return (
    <>
      <List>
        {data.map((genres) => (
          <ListItem key={genres.count} paddingY="5px">
            <HStack>
              <Image
                boxSize="30px"
                borderRadius={5}
                src={getCroppedImageUrl(genres.image_background)}
              />
              <Text fontSize="large">{genres.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
