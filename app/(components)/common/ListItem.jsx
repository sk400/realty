"use client";

import { HStack, Icon, Text } from "@chakra-ui/react";

const ListItem = ({ text, children }) => {
  return (
    <HStack
      sx={{
        "&:hover": {
          //   bgColor: "#475BE8",
          color: "white",
        },
        // bgColor: "white",
        width: "270px",
        height: "55px",
        borderRadius: "4px",
        pl: 3,
      }}
      spacing={1}
      alignItems="center"
    >
      <Icon
        sx={{
          width: 8,
          height: 8,
          mt: 3,
        }}
      >
        {children}
      </Icon>
      <Text
        sx={{
          fontWeight: "bold",
          fontSize: "24px",
        }}
      >
        {text}
      </Text>
    </HStack>
  );
};

export default ListItem;
