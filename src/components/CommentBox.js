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
        <h4>Add a comment</h4>
        <textarea onChange={this.handleChange} value={this.state.comment} />
        <div>
          <button action="submit">Submit comment</button>
        </div>
      </form>
    );
  }
}

export default connect(null, actions)(CommentBox);
