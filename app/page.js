import { fetchProperties } from "@/utils/fetchProperties";
import { HomePageContents, Loader } from "./(components)";
import { Box } from "./(components)/chakraui";
import { fetchAgents } from "@/utils/fetchAgents";
import { Suspense } from "react";

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
      <Suspense fallback={<Loader />}>
        <HomePageContents properties={properties} agents={agents} />
      </Suspense>
    </Box>
  );
};

export default Home;
