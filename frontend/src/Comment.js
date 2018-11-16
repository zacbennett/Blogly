import React, { Component } from 'react';

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
        >
          X
        </button>
        {this.props.text}
      </div>
    );
  }
}

export default Comment;
