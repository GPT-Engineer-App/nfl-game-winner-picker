import { useState } from "react";
import { Container, VStack, Heading, Select, Button, Box, Text, Flex } from "@chakra-ui/react";

const games = [
  { id: 1, teams: ["Team A", "Team B"] },
  { id: 2, teams: ["Team C", "Team D"] },
  { id: 3, teams: ["Team E", "Team F"] },
  // Add more games as needed
];

const Index = () => {
  const [selections, setSelections] = useState({});

  const handleSelectionChange = (gameId, team) => {
    setSelections((prevSelections) => ({
      ...prevSelections,
      [gameId]: team,
    }));
  };

  const handleSubmit = () => {
    console.log("Selections submitted:", selections);
    // Add logic to save selections
  };

  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl" textAlign="center">
          NFL Game Predictor
        </Heading>
        {games.map((game) => (
          <Box key={game.id} w="100%" p={4} borderWidth={1} borderRadius="md">
            <Flex justify="space-between" align="center">
              <Text fontSize="lg">
                {game.teams[0]} vs {game.teams[1]}
              </Text>
              <Select
                placeholder="Select winner"
                onChange={(e) => handleSelectionChange(game.id, e.target.value)}
              >
                {game.teams.map((team) => (
                  <option key={team} value={team}>
                    {team}
                  </option>
                ))}
              </Select>
            </Flex>
          </Box>
        ))}
        <Button colorScheme="blue" onClick={handleSubmit}>
          Submit Selections
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;