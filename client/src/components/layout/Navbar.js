import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { Box, Flex, Spacer } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <Flex>
        <li>
          <Link to="/profiles">Developers</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/dashboard">
            <i className="fas fa-user" />{" "}
            <span className="hide-sm"> Dashboard</span>
          </Link>
        </li>
        <li>
          <Link onClick={logout} to="/">
            <i className="fas fa-sign-out-alt" />{" "}
            <span className="hide-sm">Logout</span>
          </Link>
        </li>
      </Flex>
    </ul>
  );

  const guestLinks = (
    <Flex>
      <Link to="/profiles">Profiles</Link>
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
      pl={16}
      pr={16}
    >
      <Box>
        <Link to="/">
          <i className="fas fa-code"></i> BlkSmth.io
        </Link>
      </Box>
      <Spacer />
      <Box>
        {!loading && (
          <Fragment>
            {isAuthenticated ? authLinks : guestLinks}
          </Fragment>
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
