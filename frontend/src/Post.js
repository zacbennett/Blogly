import React, { Component } from 'react';

class Post extends Component {
 
  render() {
    let style = {};
    let post = this.props.blogPosts.filter(e=>e.id===+this.props.match.params.id)

    return (
      <div className="PostCard card" style={style}>
        <div className="card-body">
          <h5 className="card-title">{post[0].title}</h5>
          <p className="card-text">{post[0].description}</p>
          <p className="card-text">{post[0].body}</p>
        </div>
      </div>
    );
  }
}

export default Post;
