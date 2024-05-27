import { useState } from "react";
import { Container, VStack, Heading, Button, Box, Text, Flex } from "@chakra-ui/react";

const games = [
  { id: 1, teams: ["Team A", "Team B"], date: "2023-09-10", location: "Stadium A" },
  { id: 2, teams: ["Team C", "Team D"], date: "2023-09-11", location: "Stadium B" },
  { id: 3, teams: ["Team E", "Team F"], date: "2023-09-12", location: "Stadium C" },
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
            <Flex justify="space-between" align="center" mb={4}>
              <Text fontSize="lg" fontWeight="bold" color="gray.700">
                {game.teams[0]} vs {game.teams[1]}
              </Text>
              <Text fontSize="md" color="gray.500">
                {game.date} - {game.location}
              </Text>
            </Flex>
            <Flex justify="space-around">
              {game.teams.map((team) => (
                <Button
                  key={team}
                  colorScheme={selections[game.id] === team ? "teal" : "gray"}
                  onClick={() => handleSelectionChange(game.id, team)}
                >
                  {team}
                </Button>
              ))}
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