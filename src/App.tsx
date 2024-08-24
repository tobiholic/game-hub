import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import './App.css';
import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import useGameQueryStore from './gameQueryStore';

function App() {
  const { gameQuery, setGenreId, setPlatformId, setSearchText, setSortOrder } =
    useGameQueryStore();

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
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5} marginTop={7}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingX={5}>
            <Box marginBottom={7} marginTop={5}>
              <GameHeading />
            </Box>
            <Flex marginBottom={2} marginTop={10}>
              <Box marginRight={3}>
                <PlatformSelector />
              </Box>
              <SortSelector />
            </Flex>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
