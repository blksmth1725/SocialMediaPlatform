import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { Heading, Spacer, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import { Icon } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  const capitalize = (s) => {
    return s[0].toUpperCase() + s.slice(1);
  };

  return (
    <div className="profile bg-light">
      <Image src={avatar} alt="" borderRadius="50%" />
      <div>
        <Heading fontSize={34} fontWeight="light">
          {capitalize(name)}
        </Heading>
        <Text fontSize={20}>
          {status} {company && <span> at {company}</span>}
        </Text>
        <Text opacity="50%" fontSize={20} mb={6}>
          {location && <span>{location}</span>}
        </Text>
        <Link to={`/profile/${_id}`}>
          <Button
            _hover={{ bg: "#ebedf0", color: "highlight" }}
            variant="solid"
            bg="highlight"
            color="white"
          >
            View Profile
          </Button>
        </Link>
      </div>
      <List>
        {skills.slice(0, 4).map((skill, index) => (
          <ListItem
            color="highlight"
            key={index}
            className="text-primary"
          >
            <Icon as={FaCheck} mr={2} />
            {skill}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
