import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Box, Flex, Heading, Spacer, Stack } from "@chakra-ui/layout";
import PropTypes from "prop-types";
import Login from "../auth/Login";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  const name = "Christian Sheen";

  return (
    <Flex>
      <Box w="50%">
        <Stack>
          <Spacer />
          <Heading size="md">Hi, I'm</Heading>
          <Heading size="lg">{name}</Heading>
          <Heading size="md">Web developer</Heading>

          <Spacer />
          <p>
            A web developer that creatively solves problems and
            deliver seamless user experiences. I strive to understand
            people, technology, and how they interact to build useful
            applications. The goal is to help others bring their ideas
            to life through technology, helping them reach customers
            and grow.
          </p>
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
