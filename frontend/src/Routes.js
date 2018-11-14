import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import PostForm from './PostForm';
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
              <PostForm
                {...props}
                handlePost={this.props.handlePost}
                returnHome={this.props.returnHome}
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
                  e => e.id === +routerProps.match.params.id
                )}
                handlePost={this.props.handlePost}
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
