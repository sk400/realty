import {
  Box,
  Container,
  Avatar,
  Heading,
  HStack,
  Icon,
  Text,
  Flex,
  VStack,
} from "../../(components)/chakraui";
import { MdMail, MdOutlineStar, MdPhone } from "react-icons/md";

import { FaGlobe } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import Link from "next/link";
import { fetchAgentDetails } from "@/utils/fetchAgentDetails";
import { addressDetails } from "@/utils/data";
const AgentDetails = async ({ params: { id }, searchParams: { nrds_id } }) => {
  const agentDetails = await fetchAgentDetails(id, nrds_id);

  const locationData = addressDetails(agentDetails?.office?.address);

  return (
    <Container
      maxW="5xl"
      sx={{
        height: "91vh",
        overflowY: "auto",
        py: 10,
      }}
    >
      {/* Gradient and general details */}
      <Box
        sx={{
          bgColor: "white",
          mb: 10,
          borderRadius: "15px",
        }}
      >
        {/*gradient  */}
        <Box
          sx={{
            width: "100%",
            height: "250px",
            borderTopRadius: "15px",
          }}
          bgGradient="linear(to-r, #EAA86B, #FE00C6)"
        />
        <Box
          sx={{
            p: { base: 5, sm: 7, lg: 10 },
          }}
        >
          {/* Profile image*/}
          <Avatar
            size="2xl"
            name="Segun Adebayo"
            src={agentDetails?.photo?.href}
            sx={{
              border: "solid 5px",
              borderColor: "white",
              mt: "-80px",
              mb: 4,
            }}
          />
          {/* Full name */}
          <Heading mb={3}>{agentDetails?.fullname}</Heading>

          {/* Location */}
          <HStack>
            <Icon w="30px" h="35px" mt={2} color="#808191">
              <HiLocationMarker />
            </Icon>
            <Text fontSize="20px" fontWeight="semibold" color="#514E4E">
              {agentDetails?.office?.address.line}{" "}
              {agentDetails?.office?.address?.country}
            </Text>
          </HStack>
          {/* Contacts */}
          <Flex
            sx={{
              flexDirection: { base: "column", sm: "row" },
              gap: 5,
            }}
          >
            {/* email */}
            <HStack>
              <Icon
                sx={{
                  mt: 2,
                  color: "#808191",
                  width: "30px",
                  height: "26px",
                }}
              >
                <MdMail />
              </Icon>
              <Text sx={{ fontSize: "16px", fontWeight: "semibold" }}>
                {agentDetails?.email}
              </Text>
            </HStack>
            {/* phone number */}
            <HStack>
              <Icon
                sx={{
                  mt: 2,
                  color: "#808191",
                  width: "30px",
                  height: "30px",
                }}
              >
                <MdPhone />
              </Icon>
              <Text sx={{ fontSize: "16px", fontWeight: "semibold" }}>
                {agentDetails?.phones[0]?.number}
              </Text>
            </HStack>
          </Flex>
          {/* Website */}
          <HStack pl={1}>
            <Icon
              sx={{
                mt: 2,

                color: "#808191",
                width: "24px",
                height: "24px",
              }}
            >
              <FaGlobe />
            </Icon>

            <Link href={agentDetails?.website}>
              <Text sx={{ fontSize: "16px", fontWeight: "semibold" }}>
                Website
              </Text>
            </Link>
          </HStack>
          {/* Ratings */}
          <HStack alignItems="center">
            <Icon
              color="yellow.300"
              sx={{
                width: "24px",
                height: "24px",
                mt: 2,
              }}
            >
              <MdOutlineStar />
            </Icon>
            <Text>{agentDetails?.ratings?.average_rating}</Text>
          </HStack>
        </Box>
      </Box>
      {/* Bio and specializations */}
      <Box
        sx={{
          bgColor: "white",
          px: { base: 5, sm: 7, lg: 10 },
          py: 10,
          borderRadius: "15px",
          mb: 10,
        }}
      >
        {/* Slogan */}
        {agentDetails?.slogan && (
          <Text
            fontSize="lg"
            fontWeight="semibold"
            color="#808191"
            textAlign="center"
            width="100%"
            mb={5}
          >
            "{agentDetails?.slogan}"
          </Text>
        )}
        {/* Bio */}
        <Box mb={5}>
          <Heading mb={2}>Bio</Heading>

          <Text fontSize="16px" fontWeight="normal" color="#808191">
            {agentDetails?.bio}
          </Text>
        </Box>

        {/* Specialization */}
        {/* <Box mb={5}>
          <Heading mb={2}>Specialization</Heading>
          <Text fontSize="16px" fontWeight="normal" color="#808191">
            {agentDetails?.specialties[0]}
          </Text>
        </Box> */}
      </Box>

      {/* Address */}
      <Box
        sx={{
          bgColor: "white",
          px: { base: 5, sm: 7, lg: 10 },
          py: 10,
          borderRadius: "15px",
        }}
      >
        <Heading mb={2}>Address</Heading>
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
              <Text sx={{ fontSize: "16px", fontWeight: "medium" }} key={index}>
                {item?.data?.length > 0 ? item?.data : "NA"}
              </Text>
            ))}
          </VStack>
        </HStack>
      </Box>
    </Container>
  );
};

export default AgentDetails;
