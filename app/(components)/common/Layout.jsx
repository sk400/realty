"use client";

import { Box, useDisclosure } from "@chakra-ui/react";
import { Navbar, Sidebar } from "..";
import { useRef } from "react";

const Layout = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
      }}
    >
      {/*  Sidebar */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          left: 0,
        }}
      >
        <Sidebar btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
      </Box>
      {/* Navbar and Main content */}
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          overflowY: "hidden",
        }}
      >
        <Navbar btnRef={btnRef} onOpen={onOpen} />
        <Box sx={{ flex: 1 }} bgColor="#fafafa">
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
