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
        // alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          position: "sticky",
          top: 0,
          left: 0,
        }}
      >
        <Sidebar btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
      </Box>
      <Box
        sx={{
          width: "100%",
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
