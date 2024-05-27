import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bgGradient="linear(to-r, blue.500, teal.500)" px={4} py={2} mb={8}>
      <Flex align="center" justify="space-between">
        <Heading as="h1" size="lg" color="white" fontFamily="sans-serif">
          NFL Game Predictor
        </Heading>
        <Flex>
          <Link as={RouterLink} to="/" color="white" mx={2} fontWeight="bold">
            Home
          </Link>
          <Link as={RouterLink} to="/leaderboard" color="white" mx={2} fontWeight="bold">
            Leaderboard
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;