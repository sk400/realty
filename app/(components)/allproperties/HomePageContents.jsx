import { Box, SimpleGrid, Flex, Heading, Container } from "../chakraui";
import { Properties, PropertyCard, Agents } from "..";
import Link from "next/link";

const HomePageContents = ({ properties, agents }) => {
  return (
    <Box
      sx={{
        px: 5,
        py: 10,
      }}
    >
      <Container maxWidth="5xl" mb={"20"}>
        <Heading as="h1" size="2xl" mb={10}>
          Top 5 properties in sale
        </Heading>
        {/*Featured properties */}
        <SimpleGrid minChildWidth="300px" spacing="24px">
          {properties?.map((property) => (
            <PropertyCard key={property?.property_id} property={property} />
          ))}
        </SimpleGrid>
      </Container>

      {/* Featured agents */}
      <Box
        maxWidth="5xl"
        mx="auto"
        sx={{
          px: 5,
        }}
      >
        <Heading as="h1" size="2xl" mb={10} textAlign="left">
          Top 5 available agent in US
        </Heading>
      </Box>

      <Agents agents={agents} mw="5xl" hideHeading />
    </Box>
  );
};

export default HomePageContents;
