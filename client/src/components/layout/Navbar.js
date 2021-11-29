import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { Box, Flex, Spacer } from "@chakra-ui/layout";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Flex w={96}>
      <Link to="/profiles">Created Profiles</Link>
      <Spacer />
      <Link to="/posts">Posts</Link>
      <Spacer />

      <Link to="/dashboard">
        {" "}
        <span className="hide-sm"> Dashboard</span>
      </Link>
      <Spacer />

      <Link onClick={logout} to="/">
        <i className="fas fa-sign-out-alt" />{" "}
        <span className="hide-sm">Logout</span>
      </Link>
    </Flex>
  );

  const guestLinks = (
    <Flex w={52}>
      <Link to="/profiles">Created Profiles</Link>
      <Spacer />
      <Link to="/register">Register</Link>
    </Flex>
  );

  return (
    <Flex
      bg="gray.600"
      h={20}
      borderBottom="4px"
      borderColor="highlight"
      w="100%"
      justify="center"
      align="center"
      pl={32}
      pr={32}
    >
      <Box>
        <Link to="/">
          <i className="fas fa-code"></i> BlkSmth.io
        </Link>
      </Box>
      <Spacer />
      <Box>
        {!loading && (
          <Flex>{isAuthenticated ? authLinks : guestLinks}</Flex>
        )}
      </Box>
    </Flex>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
