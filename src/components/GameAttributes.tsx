import { TimeIcon } from '@chakra-ui/icons';
import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from '@chakra-ui/react';
import Game from '../entities/Game';
import iconMap from '../entities/PlatformIcons';
import BadgeCritic from './BadgeCritic';

interface Probs {
  game: Game;
}

const GameAttributes = ({ game }: Probs) => {
  return (
    <SimpleGrid
      columns={{
        base: 1,
        sm: 1,
        md: 2,
        lg: 2,
        xl: 2,
      }}
      spacing={10}
      borderWidth={1}
      borderRadius={10}
      padding={5}
      shadow="lg"
    >
      <Box height="auto">
        <Heading marginBottom={2} size="md" color="gray.600">
          Publisher
        </Heading>
        <List>
          {game?.publishers?.map((p) => (
            <ListItem key={p.id}>{p.name}</ListItem>
          ))}
        </List>
      </Box>

      <Box height="auto">
        <Heading marginBottom={2} size="md" color="gray.600">
          Genre
        </Heading>
        <List>
          {game?.genres.map((g) => (
            <ListItem key={g.id}>{g.name}</ListItem>
          ))}
        </List>
      </Box>

      <Box height="auto">
        <Heading marginBottom={2} size="md" color="gray.600">
          Platforms
        </Heading>
        <List>
          {game?.parent_platforms.map(({ platform }) => (
            <ListItem key={platform.id}>
              <ListIcon as={iconMap[platform.slug]} />
              {platform.name}
            </ListItem>
          ))}
        </List>
      </Box>

      <Box height="auto">
        <Heading marginBottom={2} size="md" color="gray.600">
          Ratings
        </Heading>
        <Box>
          {game?.ratings.length === 0 ? (
            <Text>No ratings available</Text>
          ) : (
            <Grid
              templateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(4, 1fr)',
              }}
              gap={5}
            >
              {game?.ratings.map((r) => (
                <GridItem key={r.id}>
                  <StatGroup>
                    <Stat>
                      <StatLabel>{r.title}</StatLabel>
                      <StatNumber>{r.count}</StatNumber>
                      <StatHelpText>{r.percent}%</StatHelpText>
                    </Stat>
                  </StatGroup>
                </GridItem>
              ))}
            </Grid>
          )}
        </Box>
      </Box>

      <Box height="auto">
        <Heading marginBottom={2} size="md" color="gray.600">
          Metascore
        </Heading>
        {game?.metacritic === null ? (
          <Text>No metascore available</Text>
        ) : (
          <>
            <BadgeCritic score={game!.metacritic} />
          </>
        )}
      </Box>

      <Box height="auto">
        <Heading marginBottom={2} size="md" color="gray.600">
          Playtime
        </Heading>
        {game!.playtime === 0 ? (
          <HStack>
            {' '}
            <Icon as={TimeIcon} />
            <Text>not available</Text>
          </HStack>
        ) : (
          <HStack>
            <Icon as={TimeIcon} />
            <Text>{game!.playtime} hours</Text>
          </HStack>
        )}{' '}
      </Box>
    </SimpleGrid>
  );
};

export default GameAttributes;
