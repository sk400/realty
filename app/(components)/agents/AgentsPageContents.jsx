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
      <Agents agents={agents} />
    </Box>
  );
};

export default AgentsPageContents;
