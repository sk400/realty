import { AgentCard } from "..";
import { Box, VStack, Heading, Container } from "../chakraui";

const Agents = ({ agents, hideHeading, mw }) => {
  return (
    <Container
      maxWidth={mw || "5xl"}
      sx={{
        p: { base: 2, sm: 5 },
        mx: "auto",
      }}
    >
      <Heading
        mb={10}
        sx={{
          display: hideHeading ? "none" : "block",
        }}
      >
        All the available agents in US
      </Heading>
      <VStack alignItems="center" spacing="24px">
        {agents?.map((agent) => (
          <AgentCard key={agent?.id} agent={agent} />
        ))}
      </VStack>
    </Container>
  );
};

export default Agents;
