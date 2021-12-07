import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEducation } from "../../actions/profile";

import {
  Input,
  Textarea,
  Button,
  Text,
  Checkbox,
} from "@chakra-ui/react";

function AddEducation({ addEducation, history }) {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <Text color="highlight" fontSize={48} fontWeight="light">
        Add Your Education
      </Text>
      <p class="lead">
        <i class="fas fa-graduation-cap"></i> Add any school or
        bootcamp you have attended
      </p>
      <small>* = required field</small>
      <form
        class="form"
        onSubmit={(e) => {
          e.preventDefault();
          addEducation(formData, history);
        }}
      >
        <div class="form-group">
          <Input
            bg="white"
            text="black"
            type="text"
            placeholder="* School or Bootcamp"
            name="school"
            value={school}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div class="form-group">
          <Input
            bg="white"
            text="black"
            type="text"
            placeholder="* Degree or Certificate"
            name="degree"
            value={degree}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div class="form-group">
          <Input
            bg="white"
            text="black"
            type="text"
            placeholder="Field Of Study"
            name="fieldofstudy"
            value={fieldofstudy}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div class="form-group">
          <Text mb={2}>From Date</Text>
          <Input
            bg="white"
            color="black"
            type="date"
            name="from"
            value={from}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div class="form-group">
          <p>
            <Checkbox
              size="lg"
              colorScheme="blue"
              type="checkbox"
              name="current"
              value={current}
              onChange={(e) => {
                setFormData({ ...formData, current: !current });
                toggleDisabled(!toDateDisabled);
              }}
            >
              Current School or Bootcamp
            </Checkbox>
          </p>
        </div>
        <div class="form-group">
          <Text mb={2}>To Date</Text>
          <Input
            bg="white"
            text="black"
            type="date"
            name="to"
            value={to}
            onChange={(e) => onChange(e)}
            disabled={toDateDisabled ? "disabled" : ""}
          />
        </div>
        <div class="form-group">
          <Textarea
            bg="white"
            name="description"
            cols="30"
            rows="5"
            placeholder="Program Description"
            value={description}
            onChange={(e) => onChange(e)}
          ></Textarea>
        </div>

        <Input type="submit" bg="highlight" color="white" />
        <Button mt={4} color="white" bg="highlight">
          <Link to="/dashboard">Go Back</Link>
        </Button>
      </form>
    </Fragment>
  );
}

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(AddEducation);
