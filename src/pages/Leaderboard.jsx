import { useEffect, useState } from "react";
import { Container, VStack, Heading, Box, Text, Flex } from "@chakra-ui/react";

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    // Fetch leaderboard data from the server
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch("/api/leaderboard");
        const data = await response.json();
        setLeaders(data);
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };

    fetchLeaderboard();

    // Set up a polling mechanism to update the leaderboard in real-time
    const intervalId = setInterval(fetchLeaderboard, 60000); // Update every 60 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center" fontFamily="sans-serif" color="teal.500" fontWeight="bold">
          Leaderboard
        </Heading>
        {leaders.map((leader, index) => (
          <Box key={leader.id} w="100%" p={4} borderWidth={1} borderRadius="md" bg="white" boxShadow="md">
            <Flex justify="space-between" align="center">
              <Text fontSize="lg" fontWeight="bold" color="gray.700">
                {index + 1}. {leader.name}
              </Text>
              <Text fontSize="lg" fontWeight="bold" color="teal.500">
                {leader.points} points
              </Text>
            </Flex>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Leaderboard;