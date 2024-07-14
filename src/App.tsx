import './App.css';
import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/usePlatforms';
import SortSelector from './components/SortSelector';

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
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: '1fr',
          lg: '250px 1fr',
        }}
      >
        <GridItem area="nav">
          <NavBar onSearch={(searchText) => setGameQuery({ ...GameQuery, searchText })} />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={GameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...GameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <HStack>
            <PlatformSelector
              selectedPlatform={GameQuery.platform}
              onSelectPlatform={(platform) => setGameQuery({ ...GameQuery, platform })}
            />
            <SortSelector
              sortOrder={GameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) => setGameQuery({ ...GameQuery, sortOrder })}
            />
          </HStack>
          <GameGrid gameQuery={GameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
