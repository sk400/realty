"use client";

import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { Properties, Searchbar } from "..";
import { useEffect, useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const HomePageContents = ({ properties }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [ascending, setAscending] = useState(false);
  const [filteredProperties, setFilteredProperties] = useState([]);

  const allProperties = properties?.data?.home_search?.results;

  const filterProperty = () => {
    const data = allProperties?.filter((property) =>
      property?.branding[0]?.name?.includes(searchTerm)
    );

    if (searchTerm?.length > 0) {
      setFilteredProperties(data);
    } else {
      setFilteredProperties(allProperties);
    }
  };

  const reverseArray = () => {
    const reversedArray = filteredProperties?.reverse();
    setFilteredProperties(reversedArray);
  };

  useEffect(() => {
    filterProperty();
  }, [searchTerm]);

  // console.log(allProperties);
  return (
    <Box
      sx={{
        p: 5,
      }}
    >
      <Flex>
        <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Spacer />
        <Button
          bgColor="white"
          rightIcon={ascending ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
          onClick={() => {
            setAscending((prev) => !prev);
            reverseArray();
          }}
        >
          Price
        </Button>
      </Flex>
      <Properties allProperties={filteredProperties} />
    </Box>
  );
};

export default HomePageContents;

// get the searchterm
// filter the properties by searchterm (propertyname)
// use useEffect to update properties based on searchterm
