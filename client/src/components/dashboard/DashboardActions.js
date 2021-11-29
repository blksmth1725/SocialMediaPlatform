import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { Icon } from "@chakra-ui/icon";
import { FaUserEdit } from "react-icons/fa";
import { Flex } from "@chakra-ui/layout";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { MdCastForEducation } from "react-icons/md";

const DashboardActions = () => {
  return (
    <Box mt={4}>
      <Flex>
        <Link to="/edit-profile">
          <Button bg="highlight" mr={4}>
            <Icon as={FaUserEdit} mr={2} /> Edit Profile
          </Button>
        </Link>
        <Link to="/add-experience">
          <Button bg="highlight" mr={4}>
            <Icon as={AiOutlineUnorderedList} mr={2} /> Add Experience
          </Button>
        </Link>
        <Link to="/add-education">
          <Button bg="highlight" mr={4}>
            <Icon as={MdCastForEducation} mr={2} /> Add Education
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default DashboardActions;
