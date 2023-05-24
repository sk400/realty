import { PropertyCard } from "..";
import { Box, Heading, HStack, Text, SimpleGrid } from "../chakraui";

const Properties = ({ allProperties }) => {
  return (
    <Box
      sx={{
        mt: 3,
        bgColor: "white",
        borderTopRadius: "20px",
      }}
    >
      <HStack
        spacing={2}
        alignItems="center"
        sx={{
          p: 3,
        }}
      >
        <Heading color="#1dbad7">{allProperties?.length}</Heading>
        <Text fontSize="18px" fontWeight="medium" color="#808191">
          results found
        </Text>
      </HStack>
      <Box
        bgColor="#fafafa"
        sx={{
          p: 3,
          height: "71vh",
          overflowY: "auto",
        }}
      >
        <SimpleGrid minChildWidth="300px" spacing="24px">
          {allProperties?.map((property) => (
            <PropertyCard key={property?.property_id} property={property} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Properties;
