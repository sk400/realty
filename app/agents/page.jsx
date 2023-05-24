import { AgentsPageContents } from "../(components)";
import { Box } from "../(components)/chakraui";

const Agents = () => {
  return (
    <Box
      sx={{
        height: "90vh",
        overflowY: "auto",
      }}
    >
      <AgentsPageContents />
    </Box>
  );
};

export default Agents;
