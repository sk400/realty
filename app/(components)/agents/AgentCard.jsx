"use client";

import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { HiLocationMarker } from "react-icons/hi";
import { MdMail, MdOutlineStar } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";

export default function AgentCard({ agent }) {
  console.log(agent);
  return (
    <Flex
      spacing={2}
      sx={{
        mb: 5,

        width: "100%",
        bgColor: "white",
        borderRadius: "15px",
        maxWidth: "900px",
        flexDirection: {
          base: "column",
          sm: "row",
        },
      }}
    >
      <Box
        height="250px"
        flexBasis="30%"
        sx={{
          p: 3,
        }}
      >
        <Image
          src={agent?.photo?.href}
          alt="profile-photo"
          boxSize="100%"
          borderRadius="lg"
          objectFit="cover"
        />
      </Box>
      <Box
        bgColor=""
        height="250px"
        flexBasis="70%"
        sx={{
          p: 3,
        }}
      >
        <Stack flexDirection="column" alignItems="start">
          {/* agent fullname */}
          <Heading>{agent?.full_name}</Heading>
          {/* location */}
          <HStack>
            <Icon w="30px" h="35px" mt={2} color="#808191">
              <HiLocationMarker />
            </Icon>
            <Text fontSize="20px" fontWeight="semibold" color="#514E4E">
              {agent?.address?.city} {agent?.address?.country}
            </Text>
          </HStack>

          {/* slogan */}
          {agent?.slogan && (
            <Text fontSize="16px" fontWeight="medium" color="#808191">
              {agent?.slogan}
            </Text>
          )}

          {/* contacts */}
          <Box
            sx={{
              mt: 3,
              pl: 1,
            }}
          >
            <HStack>
              <Icon
                sx={{
                  mt: 2,
                  color: "#808191",
                  width: "24px",
                  height: "24px",
                }}
              >
                <MdMail />
              </Icon>
              <Text>{agent?.email}</Text>
            </HStack>

            <HStack>
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

              <Link href={agent?.web_url}>
                <Text>Website</Text>
              </Link>
            </HStack>
          </Box>

          {/* rating */}

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
            <Text>{agent?.agent_rating}</Text>
          </HStack>
        </Stack>
      </Box>
    </Flex>
  );
}
