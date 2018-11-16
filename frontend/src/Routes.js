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
            render={props => <Home />}
          />

          <Route
            exact
            path="/new"
            render={props => (
              <NewPost
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/:id"
            render={routerProps => (
              <Post
                {...routerProps}
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
