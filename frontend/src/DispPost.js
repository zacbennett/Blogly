import React, { Component } from 'react';
import PostForm from './PostForm';
import CommentBox from './CommentBox';

class DispPost extends Component {
  constructor(props) {
    super(props);

    this.state = { isEditing: false };
    this.handleShowEditForm = this.handleShowEditForm.bind(this);
  }

  handleShowEditForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  render() {
    let post = this.props.post;

    let toShow;

    if (this.state.isEditing) {
      toShow = <PostForm {...this.props} post={post} isEdit={true} handleShowEditForm={this.handleShowEditForm}/>;
    } else {
      toShow = (
        <div className="card-body">
          <button onClick={this.handleShowEditForm}> Edit </button>
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.description}</p>
          <p className="card-text">{post.body}</p>
          <CommentBox
            comments={post.comments}
            deleteComment={this.props.deleteComment}
            postId={post.id}
            addComment={this.props.addComment}
          />
        </div>
      );
    }

    return <div className="PostCard card">{toShow}</div>;
  }
}

export default DispPost;
