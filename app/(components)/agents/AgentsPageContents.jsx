import { fetchAgents } from "@/utils/fetchAgents";
import { Agents } from "..";
import { Box, Heading } from "../chakraui";

const AgentsPageContents = async () => {
  const data = await fetchAgents(10);
  const agents = data?.agents;

  return (
    <Box
      sx={{
        p: 5,
      }}
    >
      <Heading>All available agents in US</Heading>
      <Agents agents={agents} />
    </Box>
  );
};

export default AgentsPageContents;
