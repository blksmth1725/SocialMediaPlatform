import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { Box, Flex, Spacer } from "@chakra-ui/layout";

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
    <ul>
      <Flex>
        <li>
          <Link to="/profiles">Profiles</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </Flex>
    </ul>
  );

  return (
    <Flex
      bg="gray.600"
      h="3.5rem"
      borderBottom="4px"
      borderColor="teal.400"
      w="100%"
    >
      <Box>
        <Link to="/">
          <i className="fas fa-code"></i> DevConnector
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
