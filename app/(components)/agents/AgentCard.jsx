"use client";

import {
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import { HiLocationMarker } from "react-icons/hi";
import { MdMail, MdOutlineStar } from "react-icons/md";
import { FaGlobe, FaExternalLinkAlt } from "react-icons/fa";
import { getCardUrl } from "@/utils/getCardUrl";
import { Link } from "@chakra-ui/next-js";
import { useRouter } from "next/navigation";

export default function AgentCard({ agent }) {
  const agentImage = getCardUrl(agent?.photo?.href);
  const router = useRouter();

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
        position: "relative",
      }}
    >
      {/* image */}
      <Box
        height="250px"
        flexBasis="30%"
        sx={{
          p: 3,
          borderRdius: "10px",
        }}
      >
        <Image
          src={agentImage}
          alt="profile-photo"
          boxSize="100%"
          borderRadius="10px"
          objectFit="cover"
        />
      </Box>
      {/* Agent info */}
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
              "{agent?.slogan}"
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

              {agent?.web_url ? (
                <Link href={agent?.web_url}>
                  <Text>Website</Text>
                </Link>
              ) : (
                <Text>NA</Text>
              )}
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
      {/* Link to AgentDetails page */}
      <Box
        sx={{
          position: "absolute",
          bottom: 3,
          right: 3,
        }}
      >
        {/* <Link href={`/agents/${agent?.advertiser_id}/${agent?.nrds_id}`}>
          <Icon
            sx={{
              w: 5,
              h: 5,
              color: "#808191",
            }}
          >
            <FaExternalLinkAlt />
          </Icon>
        </Link> */}
        <IconButton
          onClick={() =>
            router.push(`/agents/${agent?.advertiser_id}/${agent?.nrds_id}`)
          }
        >
          <Icon
            sx={{
              w: 5,
              h: 5,
              color: "#808191",
            }}
          >
            <FaExternalLinkAlt />
          </Icon>
        </IconButton>
      </Box>
    </Flex>
  );
}

// href={`/agents/${agent?.advertiser_id}?nrds_id=${agent?.nrds_id}`}
