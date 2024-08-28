import {
  Box,
  Grid,
  GridItem,
  List,
  ListItem,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Stack,
  Stat,
  StatGroup,
  StatNumber,
} from '@chakra-ui/react';

const GameDetailsPageSkeleton = () => {
  const skeletonsText = [1, 2, 3, 4];
  return (
    <>
      <Stack>
        <Skeleton height="30px" width="300px"></Skeleton>
        <Skeleton height="10px" width="100px" />
      </Stack>
      <Box marginTop={3}>
        <SkeletonText skeletonHeight="8px" noOfLines={4}></SkeletonText>
      </Box>
      <Box marginTop={10}></Box>
      <SimpleGrid
        columns={{
          base: 2,
          md: 2,
          lg: 2,
          xl: 2,
        }}
        spacing={15}
        rowGap="30px"
        borderWidth={1}
        borderRadius={10}
        padding={5}
        shadow="lg"
      >
        <Box height="80px">
          <List>
            <Skeleton height="10px" width="100px" marginBottom={4} />
            <ListItem>
              <SkeletonText
                noOfLines={1}
                skeletonHeight="5px"
                width={10}
                marginTop={3}
              ></SkeletonText>
            </ListItem>
          </List>
        </Box>
        <Box height="auto">
          <List>
            <Skeleton height="10px" width="100px" marginBottom={4} />
            <ListItem>
              <SkeletonText
                noOfLines={1}
                skeletonHeight="5px"
                width={10}
                marginTop={3}
              ></SkeletonText>
            </ListItem>
          </List>
        </Box>
        <Box height="auto">
          <List>
            <Skeleton height="10px" width="100px" marginBottom={4} />
            {skeletonsText.map((s) => (
              <ListItem key={s}>
                <SkeletonText
                  noOfLines={1}
                  skeletonHeight="5px"
                  width={10}
                  marginTop={3}
                ></SkeletonText>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box height="auto">
          <Skeleton height="10px" width="100px" marginBottom={4} />
          <Grid
            templateColumns={{
              base: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            }}
            gap={5}
          >
            {skeletonsText.map((r) => (
              <GridItem key={r}>
                <StatGroup>
                  <Stat>
                    <StatNumber>
                      <SkeletonText width={10} skeletonHeight="5px" />
                    </StatNumber>
                  </Stat>
                </StatGroup>
              </GridItem>
            ))}
          </Grid>
        </Box>
        <Box height="auto">
          <List>
            <Skeleton height="10px" width="100px" marginBottom={4} />
            <ListItem>
              <SkeletonText
                noOfLines={1}
                skeletonHeight="5px"
                width={10}
                marginTop={3}
              ></SkeletonText>
            </ListItem>
          </List>
        </Box>
        <Box height="auto">
          <List>
            <Skeleton height="10px" width="100px" marginBottom={4} />
            <ListItem>
              <SkeletonText
                noOfLines={1}
                skeletonHeight="5px"
                width={10}
                marginTop={3}
              ></SkeletonText>
            </ListItem>
          </List>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default GameDetailsPageSkeleton;
