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
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const Navbar = ({ btnRef, onOpen }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Flex
      direction="row"
      align="center"
      sx={{
        bgColor: "white",
        height: "70px",
        px: 5,
        display: pathname !== "/login" ? "flex" : "none",
      }}
    >
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        sx={{
          display: { md: "none" },
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
        <Button
          variant="solid"
          colorScheme="messenger"
          onClick={() => router.push("/login")}
        >
          Sign in
        </Button>
      )}
    </Flex>
  );
};

export default Navbar;
