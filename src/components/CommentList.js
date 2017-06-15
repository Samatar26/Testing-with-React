import React, { Component } from 'react';
import { connect } from 'react-redux';

const CommentList = props => {
  console.log(props.comments);
  const list = props.comments.map(comment => <li key={comment}>{comment}</li>);
  return (
    <div className="comment-list">
      <ul>{list}</ul>
    </div>
  );
};

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
