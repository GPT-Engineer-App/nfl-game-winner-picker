import { Box, Flex, Heading } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="blue.500" px={4} py={2} mb={8}>
      <Flex align="center" justify="center">
        <Heading as="h1" size="lg" color="white">
          NFL Game Predictor
        </Heading>
      </Flex>
    </Box>
  );
};

export default Navbar;