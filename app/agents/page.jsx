import { fetchAgents } from "@/utils/fetchAgents";
import { AgentsPageContents } from "../(components)";
import { Box } from "../(components)/chakraui";

const Agents = async () => {
  const data = await fetchAgents(20);
  const agents = data?.agents;
  return (
    <Box
      sx={{
        height: "90vh",
        overflowY: "auto",
      }}
    >
      <AgentsPageContents agents={agents} />
    </Box>
  );
};

export default Agents;
