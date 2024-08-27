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
import { Game } from '../entities/Game';
import iconMap from '../entities/PlatformIcons';
import BadgeCritic from './BadgeCritic';

interface Probs {
  game: Game;
}

const GameAttributes = ({ game }: Probs) => {
  return (
    <SimpleGrid columns={[2, null, 3]} spacing={10}>
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
          <Grid
            templateColumns={{
              base: 'repeat(2, 1fr)',
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
        </Box>
      </Box>

      <Box height="auto">
        {' '}
        <Heading marginBottom={2} size="md" color="gray.600">
          Metascore
        </Heading>
        <BadgeCritic score={game!.metacritic} />
      </Box>

      <Box height="auto">
        <Heading marginBottom={2} size="md" color="gray.600">
          Playtime
        </Heading>
        <HStack>
          <Icon as={TimeIcon} />
          <Text>{game!.playtime} hours</Text>
        </HStack>
      </Box>
    </SimpleGrid>
  );
};

export default GameAttributes;
