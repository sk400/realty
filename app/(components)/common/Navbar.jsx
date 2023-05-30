"use client";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { getProviders, signIn, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { useEffect, useState } from "react";

const Navbar = ({ btnRef, onOpen }) => {
  const { data: session } = useSession();
  const router = useRouter();
  // const pathname = usePathname();
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const setupProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    setupProviders();
  }, []);

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
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        sx={{
          display: { lg: "none" },
        }}
      >
        <HamburgerIcon />
      </IconButton>
      <Spacer />
      {session?.user ? (
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
      )}
    </Flex>
  );
};

export default Navbar;
