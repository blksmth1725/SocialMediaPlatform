import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import { Box, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Image } from "@chakra-ui/image";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    //Prevent default behavior => which automatically calls function
    e.preventDefault();
    //Check if password inputs match // available to you via decunstructed fromData
    login(email, password);
  };

  //Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <Box bg="grey.800">
        <Text> Sign Into Your Account</Text>
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <Input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
            <small className="form-text">
              This site uses Gravatar so if you want a profile image,
              use a Gravatar email
            </small>
          </div>
          <div className="form-group">
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              minLength="6"
              required
            />
          </div>

          <Button type="submit" variant="solid" bg="primary">
            Login
          </Button>
        </form>
        <p className="my-1">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </Box>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
