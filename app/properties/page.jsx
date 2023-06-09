import { fetchProperties } from "@/utils/fetchProperties";
import { PropertiesPageContents } from "../(components)";
import { Box } from "../(components)/chakraui";

const Properties = async () => {
  const properties = await fetchProperties(50);
  return (
    <Box
      sx={{
        height: "90vh",
      }}
    >
      <PropertiesPageContents properties={properties} />
    </Box>
  );
};

export default Properties;
