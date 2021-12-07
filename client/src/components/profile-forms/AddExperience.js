import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addExperience } from "../../actions/profile";
import {
  Input,
  Textarea,
  Button,
  Text,
  Checkbox,
} from "@chakra-ui/react";

function AddExperience({ addExperience, history }) {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { company, title, location, from, to, current, description } =
    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <Text color="highlight" fontSize={48} fontWeight="light">
        Add An Experience
      </Text>
      <p class="lead">
        <i class="fas fa-code-branch"></i> Add any
        developer/programming positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form
        class="form"
        onSubmit={(e) => {
          e.preventDefault();
          addExperience(formData, history);
        }}
      >
        <div class="form-group">
          <Input
            color="black"
            bg="white"
            type="text"
            placeholder="* Job Title"
            name="title"
            value={title}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div class="form-group">
          <Input
            bg="white"
            color="black"
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div class="form-group">
          <Input
            bg="white"
            color="black"
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div class="form-group">
          <h4>From Date</h4>
          <Input
            color="black"
            bg="white"
            type="date"
            name="from"
            value={from}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div class="form-group">
          <p>
            <Checkbox
              colorScheme="blue"
              size="lg"
              mr={2}
              type="checkbox"
              name="current"
              checked={current}
              value={current}
              onChange={(e) => {
                setFormData({ ...formData, current: !current });
                toggleDisabled(!toDateDisabled);
              }}
            >
              Current Job
            </Checkbox>
          </p>
        </div>
        <div class="form-group">
          <h4>To Date</h4>
          <Input
            bg="white"
            color="black"
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
            color="black"
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
            value={description}
            onChange={(e) => onChange(e)}
          ></Textarea>
        </div>
        <Input
          bg="highlight"
          color="white"
          type="submit"
          class="btn btn-primary my-1"
        />
        <Button mt={4} color="white" bg="highlight">
          <Link to="/dashboard">Go Back</Link>
        </Button>
      </form>
    </Fragment>
  );
}

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(AddExperience);
