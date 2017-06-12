import React, { Component } from 'react';

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

export default CommentBox;
