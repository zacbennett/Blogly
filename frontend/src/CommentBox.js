import React, { Component } from 'react';
import Comment from './Comment';
import uuid from 'uuid/v4'

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '',id:'' };
    this.handleAddComment = this.handleAddComment.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleAddComment(evt) {
    evt.preventDefault();
    let newComment = this.state
    newComment.id=uuid()
    this.props.addComment(this.props.postId, newComment);
    this.setState({ text: '' });
  }

  render() {
    let commentList = this.props.comments.map(comment => (
      <Comment
        id={comment.id}
        text={comment.text}
        deleteComment={this.props.deleteComment}
        postId={this.props.postId}
      />
    ));
    return (
      <div className="CommentBox card">
        {commentList}
        <form action="" onSubmit={this.handleAddComment}>
          <label htmlFor="addcomment-form">Add Comment</label>
          <input
            id="addcomment-text"
            type="text"
            name="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>Submit Comment!</button>
        </form>
      </div>
    );
  }
}

export default CommentBox;
