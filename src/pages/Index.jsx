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

  const handleRandomSelection = () => {
    const newSelections = { ...selections };
    games.forEach((game) => {
      if (!newSelections[game.id]) {
        const randomTeam = game.teams[Math.floor(Math.random() * game.teams.length)];
        newSelections[game.id] = randomTeam;
      }
    });
    setSelections(newSelections);
  };

  const handleClearSelections = () => {
    setSelections({});
  };

  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center" fontFamily="sans-serif" color="teal.500">
          NFL Game Predictor
        </Heading>
        {games.map((game) => (
          <Box key={game.id} w="100%" p={4} borderWidth={1} borderRadius="md" bg="gray.50" boxShadow="md">
            <Flex justify="space-between" align="center">
              <Text fontSize="lg" fontWeight="bold" color="gray.700">
                {game.teams[0]} vs {game.teams[1]}
              </Text>
              <Select
                placeholder="Select winner"
                value={selections[game.id] || ""}
                onChange={(e) => handleSelectionChange(game.id, e.target.value)}
                bg="white"
                borderColor="teal.500"
                _hover={{ borderColor: "teal.600" }}
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
        <Button colorScheme="teal" onClick={handleSubmit} size="lg" fontWeight="bold">
          Submit Selections
        </Button>
        <Button colorScheme="teal" variant="outline" onClick={handleRandomSelection} size="lg" fontWeight="bold">
          Randomly Select Winners
        </Button>
        <Button colorScheme="red" onClick={handleClearSelections} size="lg" fontWeight="bold">
          Clear Selections
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;