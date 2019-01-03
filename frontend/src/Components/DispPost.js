import React, { Component } from 'react';
import PostForm from './PostForm';
import CommentBox from './CommentBox';
import './DispPost.css'

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
      toShow = <PostForm {...this.props} isEdit={true} handleShowEditForm={this.handleShowEditForm}/>;
    } else {
      toShow = (
        <div className="card-body">
          <div className='card-head'>
            <h5 className="card-title">{post.title}</h5>
            <button onClick={this.handleShowEditForm}> Edit </button>
          </div>
            <div>
              <p className="card-text desc">{post.description}</p>
            </div>
            <br/>
            <div>
              <p className="card-text body">{post.body}</p>
            </div>
            <br/>
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
