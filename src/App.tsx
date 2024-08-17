import './App.css';
import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/usePlatforms';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';
import WelcomeModal from './components/WelcomeModal';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      {/* <WelcomeModal /> */}
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: '1fr',
          lg: '250px 1fr',
        }}
        paddingTop={{
          base: '05px',
          md: '5px',
          lg: '5px',
        }}
        paddingX={{
          base: '0px',
          md: '30px',
          lg: '100px',
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...GameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5} marginTop={7}>
            <GenreList
              selectedGenre={GameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...GameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingX={5}>
            <Box marginBottom={7} marginTop={5}>
              <GameHeading gameQuery={GameQuery} />
            </Box>
            <Flex marginBottom={2} marginTop={10}>
              <Box marginRight={3}>
                <PlatformSelector
                  selectedPlatform={GameQuery.platform}
                  onSelectPlatform={(platform) =>
                    setGameQuery({ ...GameQuery, platform })
                  }
                />
              </Box>
              <SortSelector
                sortOrder={GameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...GameQuery, sortOrder })
                }
              />
            </Flex>
          </Box>
          <GameGrid gameQuery={GameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
