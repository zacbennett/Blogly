import React, { Component } from 'react';
import './Comment.css'

class Comment extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }
  
  handleDeleteComment(evt) {
    evt.preventDefault();
    this.props.deleteComment(this.props.postId, this.props.id);
  }


  render() {
    return (
      <div className="Comment card">
        <button
          onClick={this.handleDeleteComment}
          className="delete-comment-button"
        >
          X
        </button>
       <p> {this.props.text}</p>

      </div>
    );
  }
}

export default Comment;
