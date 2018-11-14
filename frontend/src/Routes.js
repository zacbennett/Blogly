import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home'
import PostForm from './PostForm'
import Post from './Post'

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    
    return (
      <div className="Routes">
        <Switch>
          <Route exact path="/" render={props => <Home
                blogPosts={this.props.blogPosts}/>} />

          <Route
            exact
            path="/new"
            render={props => (
              <PostForm
                {...props}
                post={{title:'',description:'',body:'',comments:[]}}
                handlePost={this.props.handlePost}
              />
            )}
          />
           <Route
            exact
            path="/:id"
            render={props => (
              <Post
                {...props}
                blogPosts={this.props.blogPosts}
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
