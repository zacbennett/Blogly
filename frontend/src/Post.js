import React, { Component } from 'react';
import PostForm from './PostForm';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = { isEditing: false };
    this.handleShowEditForm = this.handleShowEditForm.bind(this);
  }

  handleShowEditForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  render() {
    let style = {};
    let post = this.props.post;
    console.log(post);

    let toShow;

    if (this.state.isEditing) {
      toShow = <PostForm {...this.props} post={post} />;
    } else {
      toShow = (
        <div className="card-body">
          <button onClick={this.handleShowEditForm}> Edit </button>
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.description}</p>
          <p className="card-text">{post.body}</p>
        </div>
      );
    }

    return (
      <div className="PostCard card" style={style}>
        {toShow}
      </div>
    );
  }
}

export default Post;
