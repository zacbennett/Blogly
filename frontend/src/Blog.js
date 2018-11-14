import React, { Component } from 'react';
import NavBar from './NavBar';
import Routes from './Routes';

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
          comments: ['this site sux']
        }
      ]
    };
    this.handlePost = this.handlePost.bind(this);
    this.returnHome = this.returnHome.bind(this);
  }

  async handlePost(post, type) {
    //when connecting to backend, should post to backend.

    if (type === 'new') {
      this.setState({
        blogPosts: [...this.state.blogPosts, post],
        isLoading: false
      });
    } else if (type === 'edit') {
      let idx = this.state.blogPosts.findIndex(e => e.id === post.id);
      let newState = [
        ...this.state.blogPosts.slice(0, idx),
        post,
        ...this.state.blogPosts.slice(idx + 1)
      ];
      this.setState({ isLoading: false, blogPosts: newState });
    }
  }

  returnHome(evt) {
    return this.props.history.push('/');
  }

  async componentDidMount() {
    //needs to fetch data from backend.
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
        />
      </div>
    );
  }
}

export default Blog;
