import { AgentCard } from "..";
import { Box, SimpleGrid } from "../chakraui";

const Agents = ({ agents }) => {
  return (
    <SimpleGrid minChildWidth="300px" spacing="24px">
      {agents?.map((agent) => (
        <AgentCard key={agent?.id} agent={agent} />
      ))}
    </SimpleGrid>
  );
};

export default Agents;
