import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";
import {
  getCurrentProfile,
  deleteAccount,
} from "../../actions/profile";
import { Box, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/react";

const Dashboard = ({
  deleteAccount,
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Box h="100vh" w="100%" border="3px" boxSizing="border-box">
      <Heading fontSize={48} fontWeight="light" color="highlight">
        Dashboard
      </Heading>
      <Heading fontWeight="light" opacity="50%">
        Welcome, {user && user.name}
      </Heading>
      {profile !== null ? (
        <Fragment>
          <Experience experience={profile.experience} />
          <Education education={profile.education} />

          <Flex>
            <DashboardActions />

            <Button
              mt={10}
              variant="solid"
              bg="danger"
              onClick={() => deleteAccount()}
            >
              Delete My Account
            </Button>
          </Flex>
        </Fragment>
      ) : (
        <Box w="100%">
          <Heading
            opacity="70%"
            fontSize={24}
            fontWeight="light"
            mb={8}
            mt={4}
          >
            You have not yet setup a profile, please add some info
          </Heading>
          <Link to="/create-profile">
            <Button bg="highlight">Create Profile</Button>
          </Link>
        </Box>
      )}
    </Box>
  );
};

Dashboard.propTypes = {
  deleteAccount: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  deleteAccount,
})(Dashboard);
