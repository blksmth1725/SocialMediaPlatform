import React, { Fragment } from "react";
import { BsTrash } from "react-icons/bs";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Box, Heading } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/icon";

import { deleteExperience } from "../../actions/profile";
import formatDate from "../../utils/formatDate";

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => (
    <Tr key={exp._id}>
      <Td>{exp.company}</Td>
      <Td className="hide-sm">{exp.title}</Td>
      <Td>
        {formatDate(exp.from)} - {exp.to ? formatDate(exp.to) : "Now"}
      </Td>

      <Button
        mt={2}
        ml={8}
        variant="solid"
        bg="danger"
        onClick={() => deleteExperience(exp._id)}
      >
        <Icon as={BsTrash} mr={2} />
        Delete
      </Button>
    </Tr>
  ));

  return (
    <Box mt={16}>
      <Heading fontSize={34} fontWeight="light">
        Experience Credentials
      </Heading>
      <Table mt={6} variant="simple" borderColor="highlight">
        <Thead>
          <Tr>
            <Th>Company</Th>
            <Th>Title</Th>
            <Th>Years</Th>
          </Tr>
        </Thead>
        <Tbody>{experiences}</Tbody>
      </Table>
    </Box>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(Experience);
