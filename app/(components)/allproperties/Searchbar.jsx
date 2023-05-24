"use client";

import { SearchIcon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const Searchbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <Box>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search properties..."
          size="md"
          bgColor="#f4f4f4"
          outline="none"
          focusBorderColor="white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputGroup>
    </Box>
  );
};

export default Searchbar;
