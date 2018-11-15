import React, { Component } from 'react';
import NavBar from './NavBar';
import Routes from './Routes';
import uuid from 'uuid/v4';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      blogPosts: [
        {
          id: 1,
          title: 'test',
          description: 'desc test',
          body: 'body test',
          comments: []
        },
        {
          id: 2,
          title: 'testsdf',
          description: 'desc testsadf',
          body: 'body testdsaf',
          comments: [
            { id: 1, text: 'this site sux' },
            { id: 2, text: 'fuck u bro' },
            { id: 3, text: 'i hate the internet' }
          ]
        }
      ]
    };
    this.handlePost = this.handlePost.bind(this);
    this.returnHome = this.returnHome.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  async handlePost(post, type) {
    //when connecting to backend, should post to backend.

    if (type === 'New') {
      this.setState({
        blogPosts: [...this.state.blogPosts, post],
        isLoading: false
      });
    } else if (type === 'Edit') {
      let idx = this.state.blogPosts.findIndex(e => e.id === post.id);
      let newState = [
        ...this.state.blogPosts.slice(0, idx),
        post,
        ...this.state.blogPosts.slice(idx + 1)
      ];
      this.setState({ isLoading: false, blogPosts: newState });
    }
  }

  addComment(postId, comment) {
    let post = this.state.blogPosts.find(post => post.id === postId);
    // look in comments and slice out
    comment['id'] = uuid();

    post.comments.push(comment);

    let idx = this.state.blogPosts.findIndex(e => e.id === post.id);
    let newState = [
      ...this.state.blogPosts.slice(0, idx),
      post,
      ...this.state.blogPosts.slice(idx + 1)
    ];
    this.setState(
      { isLoading: false, blogPosts: newState },
      console.log('state is ', this.state)
    );
  }

  deleteComment(postId, commentId) {
    console.log('post id is ', postId, 'commentId is ', commentId);
    //   look for post
    let post = this.state.blogPosts.find(post => post.id === postId);
    // look in comments and slice out
    post.comments = post.comments.filter(comment => comment.id !== commentId);
    // update state

    let idx = this.state.blogPosts.findIndex(e => e.id === post.id);
    let newState = [
      ...this.state.blogPosts.slice(0, idx),
      post,
      ...this.state.blogPosts.slice(idx + 1)
    ];
    this.setState(
      { isLoading: false, blogPosts: newState },
      console.log('state is ', this.state)
    );
  }

  async componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    if (this.state.isLoading === true) {
      return <h1>Loading...</h1>;
    }

    return (
      <div className="App">
        <NavBar />
        <Routes
          blogPosts={this.state.blogPosts}
          handlePost={this.handlePost}
          returnHome={this.returnHome}
          deleteComment={this.deleteComment}
          addComment={this.addComment}
        />
      </div>
    );
  }
}

export default Blog;
