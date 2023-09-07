import { fetchAgents } from "@/utils/fetchAgents";
import { AgentsPageContents, Loader } from "../(components)";
import { Box } from "../(components)/chakraui";
import { Suspense } from "react";

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
      <Suspense fallback={<Loader />}>
        <AgentsPageContents agents={agents} />
      </Suspense>
    </Box>
  );
};

export default Agents;
