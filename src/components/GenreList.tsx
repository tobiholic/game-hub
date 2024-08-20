import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletonGenres = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];

  //if (isLoading) return <Spinner></Spinner>;
  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3} marginTop={2}>
        Genres
      </Heading>
      <List marginTop={2}>
        {isLoading &&
          skeletonGenres.map((skeleton) => (
            <ListItem key={skeleton} paddingY="5px">
              <HStack>
                <SkeletonCircle />
                <SkeletonText
                  skeletonHeight="1"
                  mt={4}
                  spacing={2}
                  noOfLines={2}
                >
                  Loading
                </SkeletonText>
              </HStack>
            </ListItem>
          ))}
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="7px">
            <HStack>
              <Image
                objectFit="cover"
                boxSize="30px"
                borderRadius={5}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                onClick={() => {
                  onSelectGenre(genre);
                }}
                fontSize="large"
                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
