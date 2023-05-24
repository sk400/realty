// import Image from "next/image";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Divider,
  Image,
  Icon,
  HStack,
  Spacer,
  Center,
} from "../chakraui";
import { FaBed, FaBath, FaHome } from "react-icons/fa";

const PropertyCard = ({ property }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={property?.primary_photo?.href}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          sx={{
            minWidth: "100%",
            minHeight: "50%",
            objectFit: "cover",
          }}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md" color="#1dbad7">
            {property?.branding[0]?.name}
          </Heading>

          <Text color="black" fontSize="16px" fontWeight="medium">
            ${property?.list_price}
          </Text>
        </Stack>
      </CardBody>
      <Center>
        <Divider
          sx={{
            width: "250px",
          }}
        />
      </Center>
      <CardFooter>
        <HStack spacing="5px" alignItems="center">
          <Box
            sx={{
              width: "25px",
              height: "25px",
              bgColor: "#dfdfdf",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            borderRadius="full"
          >
            <Icon
              sx={{
                mt: 1,
                ml: 1,
              }}
              color="#1dbad7"
            >
              <FaBed />
            </Icon>
          </Box>
          <Text fontSize="14px" fontWeight="semibold" color="#1dbad7">
            {property?.description?.beds} beds
          </Text>
        </HStack>
        <Spacer />
        <HStack spacing="5px" alignItems="center">
          <Box
            sx={{
              width: "25px",
              height: "25px",
              bgColor: "#dfdfdf",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            borderRadius="full"
          >
            <Icon
              sx={{
                mt: 1,
                ml: 1,
              }}
              color="#1dbad7"
            >
              <FaBath />
            </Icon>
          </Box>

          <Text fontSize="14px" fontWeight="semibold" color="#1dbad7">
            {property?.description?.baths} baths
          </Text>
        </HStack>
        <Spacer />
        <HStack spacing="5px" alignItems="center">
          <Box
            sx={{
              width: "25px",
              height: "25px",
              bgColor: "#dfdfdf",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            borderRadius="full"
          >
            <Icon
              sx={{
                mt: 1,
                ml: 1,
              }}
              color="#1dbad7"
            >
              <FaHome />
            </Icon>
          </Box>
          <Text fontSize="14px" fontWeight="semibold" color="#1dbad7">
            {property?.description?.sqft} sqft
          </Text>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
