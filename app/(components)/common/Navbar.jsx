"use client";
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  HStack,
  IconButton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { FcGoogle } from "react-icons/fc";
import Image from "next/image";

const Navbar = ({ btnRef, onOpen }) => {
  return (
    <Flex
      direction="row"
      align="center"
      sx={{
        bgColor: "white",
        height: "70px",
        px: 5,
        position: "sticky",
        top: 0,
        right: 0,
      }}
    >
      <Center height="100px">
        <Image
          src="/assets/logo.png"
          width={100}
          height={50}
          alt="realty logo"
        />
      </Center>
      <Spacer />
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        sx={{
          display: { lg: "none" },
        }}
      >
        <HamburgerIcon />
      </IconButton>

      {/* {session?.user ? (
        <HStack spacing={5}>
          <Text fontSize="sm">{session?.user?.name}</Text>
          <Avatar name="Dan Abrahmov" src={session?.user?.image} />
        </HStack>
      ) : (
        <>
          {Object.values(providers).map((provider) => (
            <Button
              key={provider.name}
              size="lg"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
                bgColor: "white",
                px: 3,
                py: 2,
              }}
              leftIcon={<FcGoogle />}
              onClick={() => {
                signIn(provider.id);
              }}
            >
              Sign in
            </Button>
          ))}
        </>
      )} */}
    </Flex>
  );
};

export default Navbar;
