import React, { Fragment } from "react";
import PropTypes from "prop-types";
import formatDate from "../../utils/formatDate";
import { connect } from "react-redux";

const PostItem = ({
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
}) => {
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <a href="profile.html">
          <img
            className="round-img"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt=""
          />
          <h4>{name}</h4>
        </a>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">Posted on {formatDate(date)}</p>
        <button type="button" className="btn btn-light">
          <i className="fas fa-thumbs-up"></i>
          <span>{likes}</span>
        </button>
        <button type="button" className="btn btn-light">
          <i className="fas fa-thumbs-down"></i>
        </button>
        <a href="post.html" className="btn btn-primary">
          Discussion <span className="comment-count">2</span>
        </a>
        <button type="button" className="btn btn-danger">
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(PostItem);
