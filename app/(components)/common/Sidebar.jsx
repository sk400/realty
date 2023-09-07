"use client";

import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Icon,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { MdLogout } from "react-icons/md";
import Link from "next/link";
import { SidebarItems } from "@/utils/data";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
// import { useRouter } from "next/navigation";

const Sidebar = ({ btnRef, isOpen, onClose }) => {
  // const router = useRouter();
  const pathname = usePathname();
  // console.log(pathname.includes());
  return (
    <Box>
      {/* Sidebar for small and medium screens */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor="#fafafa">
          <DrawerCloseButton />
          <DrawerHeader>
            <Center height="100px">
              <Image
                src="/assets/logo.png"
                width={150}
                height={50}
                alt="realty logo"
              />
            </Center>
          </DrawerHeader>

          <DrawerBody>
            <VStack spacing="5px">
              {SidebarItems?.map((item, index) => (
                <Link
                  href={item?.path}
                  style={{ textDecoration: "none", color: "black" }}
                  key={index}
                  onClick={onClose}
                >
                  <HStack
                    sx={{
                      "&:hover": {
                        bgColor: "white",
                      },
                      bgColor: item.path === pathname ? "white" : "#fafafa",
                      color: "black",
                      width: "270px",
                      height: "55px",
                      borderRadius: "12px",
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
                      {item?.icon}
                    </Icon>
                    <Text
                      sx={{
                        fontWeight: "semi-bold",
                        fontSize: "20px",
                      }}
                    >
                      {item?.name}
                    </Text>
                  </HStack>
                </Link>
              ))}
            </VStack>
          </DrawerBody>

          {/* <DrawerFooter>
            <IconButton
              bg="#fafafa"
              sx={{
                "&:hover": {
                  bgColor: "white",
                },
              }}
              onClick={() => {
                signOut();
              }}
            >
              <Icon
                sx={{
                  width: 8,
                  height: 8,
                  mt: 3,
                  ml: 3,
                  color: "#1dbad7",
                }}
              >
                <MdLogout />
              </Icon>
            </IconButton>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>

      <Box
        bgColor="white"
        sx={{
          display: { base: "none", sm: "none", md: "none", lg: "block" },
          position: "relative",
          height: "100vh",
          width: "250px",
          p: 3,
        }}
      >
        <Center height="100px">
          <Image
            src="/assets/logo.png"
            width={150}
            height={50}
            alt="realty logo"
          />
        </Center>
        <VStack spacing="5px">
          {SidebarItems?.map((item, index) => (
            <Link
              href={item?.path}
              style={{ textDecoration: "none", color: "black" }}
              key={index}
              onClick={onClose}
            >
              <HStack
                sx={{
                  "&:hover": {
                    bgColor: "#fafafa",
                    // color: "white",
                  },
                  bgColor: item.path === pathname ? "#fafafa" : "white",
                  color: "black",
                  width: "230px",
                  height: "55px",
                  borderRadius: "12px",
                  pl: 3,
                }}
                spacing={2}
                alignItems="center"
              >
                <Icon
                  sx={{
                    width: 8,
                    height: 8,
                    mt: 3,
                  }}
                >
                  {item?.icon}
                </Icon>
                <Text
                  sx={{
                    fontWeight: "semi-bold",
                    fontSize: "20px",
                  }}
                >
                  {item?.name}
                </Text>
              </HStack>
            </Link>
          ))}
        </VStack>
        {/* Logout button */}
        {/* <IconButton
          bg="#fafafa"
          sx={{
            "&:hover": {
              bgColor: "white",
              // color: "white",
            },
            color: "#1dbad7",
            position: "absolute",
            bottom: "20px",
            right: "30px",
          }}
          onClick={() => {
            signOut();
          }}
        >
          <Icon
            sx={{
              width: 8,
              height: 8,
              mt: 3,
              ml: 3,
            }}
          >
            <MdLogout />
          </Icon>
        </IconButton> */}
      </Box>
    </Box>
  );
};

export default Sidebar;
