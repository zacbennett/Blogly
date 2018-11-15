import React, { Component } from 'react';
import TitleList from './TitleList'

class Home extends Component {
  render() {
   
    return (
      <div className="Home">
       Welcome to <b>Microblog</b>
       <TitleList blogPosts={this.props.blogPosts} />
      </div>
    );
  }
}

export default Home;