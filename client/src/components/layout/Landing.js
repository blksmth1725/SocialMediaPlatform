import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/layout";
import PropTypes from "prop-types";
import Login from "../auth/Login";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Flex mt={56} pl={32} pr={32}>
      <Box w="50%">
        <Stack spacing={2}>
          <Spacer />
          <Heading color="highlight" fontSize={34} fontWeight="light">
            Hi, I'm
          </Heading>
          <Heading
            fontSize={52}
            fontWeight="semibold"
            letterSpacing="wider"
          >
            Christian Sheen
          </Heading>
          <Heading color="highlight" fontSize={34} fontWeight="light">
            A web developer
          </Heading>
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Text fontSize={24} space={20} pr={28}>
            Check out my protfolio. In it I strive to understand
            people, technology, and how they interact to build useful
            applications and features. The goal is to help others
            bring their ideas to life through technology, helping them
            reach customers and grow.
          </Text>
          <Spacer />
        </Stack>
      </Box>
      <Spacer />
      <Login />
    </Flex>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
