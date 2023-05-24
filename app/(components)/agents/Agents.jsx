import { AgentCard } from "..";
import { Box, Flex, SimpleGrid, VStack, Heading } from "../chakraui";

const Agents = ({ agents }) => {
  return (
    <Box
      maxWidth="900px"
      sx={{
        p: { base: 2, sm: 5 },
        mx: "auto",
      }}
    >
      <Heading mb={10}>All available agents in US</Heading>
      <VStack alignItems="center" spacing="24px">
        {agents?.map((agent) => (
          <AgentCard key={agent?.id} agent={agent} />
        ))}
      </VStack>
    </Box>
  );
};

export default Agents;
