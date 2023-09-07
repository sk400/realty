import { fetchProperties } from "@/utils/fetchProperties";
import { Loader, PropertiesPageContents } from "../(components)";
import { Box } from "../(components)/chakraui";
import { Suspense } from "react";

const Properties = async () => {
  const properties = await fetchProperties(50);
  return (
    <Box
      sx={{
        height: "90vh",
      }}
    >
      <Suspense fallback={<Loader />}>
        <PropertiesPageContents properties={properties} />
      </Suspense>
    </Box>
  );
};

export default Properties;
