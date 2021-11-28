import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

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
        <Heading fontSize={34} fontWeight="semibold">
          {capitalize(name)}
        </Heading>
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className="my-1">{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className="text-primary">
            <i className="fas fa-check"></i> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
