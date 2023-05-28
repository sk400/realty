import { fetchProperties } from "@/utils/fetchProperties";
import { HomePageContents } from "./(components)";
import { Box } from "./(components)/chakraui";
import { fetchAgents } from "@/utils/fetchAgents";

const Home = async () => {
  const propertyData = await fetchProperties(5);
  const data = await fetchAgents(5);

  const properties = propertyData?.data?.home_search?.results;
  const agents = data?.agents;

  return (
    <Box
      sx={{
        height: "90vh",
        overflowY: "scroll",
      }}
    >
      <HomePageContents properties={properties} agents={agents} />
    </Box>
  );
};

export default Home;
