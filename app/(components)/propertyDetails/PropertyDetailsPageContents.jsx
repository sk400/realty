import Link from "next/link";
import {
  Box,
  Heading,
  HStack,
  Container,
  Icon,
  Text,
  Image,
  Spacer,
  Flex,
  Divider,
  Card,
  VStack,
  SimpleGrid,
  Grid,
  GridItem,
} from "../chakraui";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaBed, FaBath, FaHome } from "react-icons/fa";
import millify from "millify";
import { locationDetails } from "@/utils/data";
import { getBigImageUrl } from "@/utils/getBigImageUrl";
import { getCardUrl } from "@/utils/getCardUrl";

const PropertyDetailsPageContents = ({ propertyDetails }) => {
  const locationData = locationDetails(propertyDetails);

  const bigImage = getBigImageUrl(propertyDetails?.photos[0]?.href);

  return (
    <Container
      maxW="5xl"
      sx={{
        height: "91vh",
        overflowY: "auto",
        py: 10,
      }}
    >
      {/* Back to search link */}
      <Link href="/properties">
        <HStack spacing={3} alignItems="center" mb={5}>
          <Icon mt={2}>
            <FaLongArrowAltLeft />
          </Icon>
          <Text fontSize="16px" fontWeight="bold" color="#808191">
            Back to properties
          </Text>
        </HStack>
      </Link>
      {/* Big heading and price */}
      <Flex direction="row" width="100%" mb={7}>
        <Heading>Property for sale</Heading>
        <Spacer />
        <Flex direction="row" alignItems="center">
          <Text fontSize="16px" fontWeight="bold" color="#808191" mr={2}>
            Best price
          </Text>

          <Heading>${millify(propertyDetails?.list_price)}</Heading>
        </Flex>
      </Flex>
      {/* Big property image */}
      <Box
        sx={{
          height: {
            base: "250px",
            sm: "300px",
            md: "350px",
          },
          borderRadius: "20px",
          mb: 10,
        }}
        width="100%"
      >
        <Image
          src={bigImage}
          boxSize="100%"
          objectFit="cover"
          alt="Dan Abramov"
          borderRadius="20px"
        />
      </Box>

      {/* Property info */}
      <Box
        sx={{
          bgColor: "white",
          p: { base: "10px", sm: "20px" },
          borderRadius: "10px",
        }}
      >
        {/* Overview and description */}
        <Box
          sx={{
            bgColor: "#fafafa",
            p: 3,
            mb: 5,
            borderRadius: "10px",
          }}
        >
          <Box>
            <Heading mb={2}>Overview and description</Heading>
            <Divider color="#808191" mb={5} />
            <Text fontSize="16px" fontWeight="normal" color="#808191">
              {propertyDetails?.description?.text}
            </Text>
          </Box>
          {/* Icon cards */}
          <Flex
            sx={{
              my: 7,
              flexDirection: { base: "column", sm: "row" },

              gap: 3,
            }}
          >
            <Card
              sx={{
                width: "155px",
                height: "100px",
                bgColor: "white",
                p: 5,
                textAlign: "left",
              }}
            >
              <Icon
                sx={{
                  width: "40px",
                  height: "30px",
                  color: "#808191",
                  mb: 1,
                }}
              >
                <FaBed />
              </Icon>
              <Text
                fontSize="16pxpx"
                fontWeight="normal"
                ml={1}
                color="#808191"
              >
                {propertyDetails?.description?.beds} bed rooms
              </Text>
            </Card>
            <Card
              sx={{
                width: "155px",
                height: "100px",
                bgColor: "white",
                p: 5,
                textAlign: "left",
              }}
            >
              <Icon
                sx={{
                  width: "40px",
                  height: "30px",
                  color: "#808191",
                  mb: 1,
                }}
              >
                <FaBath />
              </Icon>
              <Text
                fontSize="16pxpx"
                fontWeight="normal"
                ml={1}
                color="#808191"
              >
                {propertyDetails?.description?.baths} bath rooms
              </Text>
            </Card>
            <Card
              sx={{
                width: "155px",
                height: "100px",
                bgColor: "white",
                p: 5,
                textAlign: "left",
              }}
            >
              <Icon
                sx={{
                  width: "40px",
                  height: "30px",
                  color: "#808191",
                  mb: 1,
                }}
              >
                <FaHome />
              </Icon>
              <Text
                fontSize="16pxpx"
                fontWeight="normal"
                ml={1}
                color="#808191"
              >
                {propertyDetails?.description?.sqft} sqft
              </Text>
            </Card>
          </Flex>
        </Box>
        {/* location and schools */}
        <Box
          sx={{
            bgColor: "#fafafa",
            p: 3,
            mb: 5,
            borderRadius: "10px",
          }}
        >
          <Flex
            sx={{
              flexDirection: { base: "column", sm: "row" },
              maxWidth: "2xl",
            }}
          >
            {/* Location */}
            <Box>
              <Heading mb={2} fontSize="26px" fontWeight="medium">
                Location
              </Heading>
              <Divider
                sx={{
                  mb: 4,
                }}
              />
              {/* location */}
              <HStack spacing={10}>
                <VStack spacing={2} alignItems="start">
                  {locationData?.map((item, index) => (
                    <Text
                      sx={{
                        fontSize: "16px",
                        fontWeight: "medium",
                        color: "#808191",
                      }}
                      key={index}
                    >
                      {item?.name}
                    </Text>
                  ))}
                </VStack>
                <VStack spacing={2} alignItems="start">
                  {locationData?.map((item, index) => (
                    <Text
                      sx={{ fontSize: "16px", fontWeight: "medium" }}
                      key={index}
                    >
                      {item?.data}
                    </Text>
                  ))}
                </VStack>
              </HStack>
            </Box>

            <Spacer
              sx={{
                display: {
                  base: "none",
                  sm: "block",
                },
              }}
            />

            {/* Schools */}
            <Box>
              <Heading
                mb={2}
                fontSize="26px"
                fontWeight="medium"
                sx={{
                  mt: { base: 5, sm: 0, md: 0, lg: 0, xl: 0 },
                }}
              >
                Schools
              </Heading>
              <Divider
                sx={{
                  mb: 4,
                }}
              />

              <VStack spacing={2} alignItems="start">
                {propertyDetails?.schools?.schools.map((item) => (
                  <Text
                    sx={{ fontSize: "16px", fontWeight: "semibold" }}
                    key={item?.id}
                  >
                    {item?.name}
                  </Text>
                ))}
              </VStack>
            </Box>
          </Flex>
        </Box>
        {/* Property images */}
        <Box
          sx={{
            bgColor: "#fafafa",
            p: 3,
            mb: 5,
            borderRadius: "10px",
          }}
        >
          <Heading mb={5} fontSize="26px" fontWeight="medium">
            Property images
          </Heading>
          <Grid templateColumns="repeat(12, 1fr)" gap="20px">
            {propertyDetails?.photos?.slice(0, 9)?.map((item, index) => (
              <GridItem
                colSpan={{ base: 12, sm: 6, lg: 4 }}
                borderRadius="10px"
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "250px",
                    borderRadius: "10px",
                  }}
                >
                  <Image
                    key={index}
                    src={getCardUrl(item?.href)}
                    objectFit="cover"
                    boxSize="100%"
                    borderRadius="10px"
                  />
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default PropertyDetailsPageContents;

// -w480_h360_x2 (for big image)
