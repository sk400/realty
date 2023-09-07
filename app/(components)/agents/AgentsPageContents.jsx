import { Agents } from "..";
import { Box, Heading } from "../chakraui";

const AgentsPageContents = async ({ agents }) => {
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
