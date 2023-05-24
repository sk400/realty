<Stack
  borderRadius="lg"
  sx={{
    width: {
      base: "300px",
      md: "700px",
    },
    mb: 5,
  }}
  height="350px"
  direction={{ base: "column", sm: "row" }}
  bg={useColorModeValue("white", "gray.900")}
  boxShadow={"2xl"}
  padding={4}
  spacing={2}
>
  <img
    src={agent?.photo?.href}
    alt="profile-photo"
    style={{
      width: "200px",
      height: "200px",
    }}
  />

  <Stack flexDirection="column" alignItems="start" p={1} pt={2}>
    <Heading
      sx={{
        fontSize: { sm: "24px", md: "34px" },
      }}
      fontFamily={"body"}
      fontWeight="bold"
    >
      {agent?.broker?.name}
    </Heading>
    <HStack>
      <Icon>
        <HiLocationMarker />
      </Icon>
      <Text>
        {agent?.address?.city} {agent?.address?.country}
      </Text>
    </HStack>
    {agent?.slogan && <Text>{agent?.slogan}</Text>}

    {/* <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
            {agent?.email}
          </Text> */}

    <Heading>{agent?.full_name}</Heading>
    <HStack>
      <Icon>
        <MdMail />
      </Icon>
      <Text>{agent?.email}</Text>
    </HStack>

    <HStack>
      <Icon>
        <FaGlobe />
      </Icon>

      <Link href={agent?.web_url}>
        <Text>Website</Text>
      </Link>
    </HStack>
  </Stack>
</Stack>;
