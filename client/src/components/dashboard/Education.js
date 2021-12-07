import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteEducation } from "../../actions/profile";
import formatDate from "../../utils/formatDate";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { BsTrash } from "react-icons/bs";
import { Button } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/icon";

const Education = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <Tr key={edu._id}>
      <Td>{edu.school}</Td>
      <Td className="hide-sm">{edu.degree}</Td>
      <Td>
        {formatDate(edu.from)} - {edu.to ? formatDate(edu.to) : "Now"}
      </Td>
      <Button
        mt={2}
        ml={8}
        variant="solid"
        bg="danger"
        onClick={() => deleteEducation(edu._id)}
      >
        <Icon as={BsTrash} mr={2} />
        Delete
      </Button>
    </Tr>
  ));

  return (
    <Fragment>
      <Heading mt={16} fontSize={28} fontWeight="light">
        Education
      </Heading>
      <Table mt={5}>
        <Thead>
          <Tr>
            <Th>Institution</Th>
            <Th className="hide-sm">Degree</Th>
            <Th className="hide-sm">Years</Th>
          </Tr>
        </Thead>
        <Tbody>{educations}</Tbody>
      </Table>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);
