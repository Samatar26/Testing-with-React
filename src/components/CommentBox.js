import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
  }
  handleChange = ev => {
    this.setState({ comment: ev.target.value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="comment-box">
        <textarea onChange={this.handleChange} value={this.state.comment} />
        <button action="submit">Submit comment</button>
      </form>
    );
  }
}

export default connect(null, actions)(CommentBox);
