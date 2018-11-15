import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <div className="Comment card">
        <button
          onClick={() =>
            this.props.deleteComment(this.props.postId, this.props.id)
          }
        >
          X
        </button>
        {this.props.text}
      </div>
    );
  }
}

export default Comment;
