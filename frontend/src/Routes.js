import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import NewPost from './NewPost';
import Post from './Post';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Routes">
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Home blogPosts={this.props.blogPosts} />}
          />

          <Route
            exact
            path="/new"
            render={props => (
              <NewPost
                {...props}
                handlePost={this.props.handlePost}
              />
            )}
          />
          <Route
            exact
            path="/:id"
            render={routerProps => (
              <Post
                {...routerProps}
                post={this.props.blogPosts.find(
                  e => e.id.toString() === routerProps.match.params.id.toString()
                )}
                handlePost={this.props.handlePost}
                deleteComment={this.props.deleteComment}
                addComment={this.props.addComment}
              />
            )}
          />

          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default Routes;
