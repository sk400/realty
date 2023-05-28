import Link from "next/link";
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
import { getCardUrl } from "@/utils/getCardUrl";
import millify from "millify";

const PropertyCard = ({ property }) => {
  const propertyImage = getCardUrl(property?.primary_photo?.href);

  return (
    <Link href={`/properties/${property?.property_id}`}>
      <Card maxW="sm">
        <CardBody>
          {/* image */}
          <Box
            sx={{
              width: "100%",
              height: "200px",
              borderRadius: "lg",
            }}
          >
            <Image
              src={propertyImage}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              sx={{
                objectFit: "cover",
              }}
              boxSize="100%"
            />
          </Box>
          {/* property name and price */}
          <Stack mt="6" spacing="3">
            <Heading size="md" color="#1dbad7">
              {property?.branding[0]?.name}
            </Heading>

            <Text color="black" fontSize="16px" fontWeight="medium">
              ${millify(property?.list_price)}
            </Text>
          </Stack>
        </CardBody>
        {/* divider */}
        <Center>
          <Divider
            sx={{
              width: "250px",
            }}
          />
        </Center>
        {/* Room details */}
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
    </Link>
  );
};

export default PropertyCard;

// -w480_h360  (for big images)
