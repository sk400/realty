"use client";

import {
  Button,
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
import React, { useRef } from "react";
import { MdLogout } from "react-icons/md";
import Link from "next/link";
import { SidebarItems } from "@/utils/data";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Sidebar = ({ btnRef, isOpen, onClose }) => {
  const router = useRouter();
  return (
    <div>
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
            <Image
              src="/assets/logo.png"
              width={150}
              height={50}
              alt="realty logo"
            />
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
                        // color: "white",
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

          <DrawerFooter>
            <IconButton
              bg="#fafafa"
              sx={{
                "&:hover": {
                  bgColor: "white",
                },
              }}
              onClick={() => {
                signOut();
                router.push("/login");
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
            </IconButton>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Sidebar;
