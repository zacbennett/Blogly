import React, { Component } from 'react';
import PostCard from './PostCard'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let postList = this.props.blogPosts.map(e=>(
        <PostCard title={e.title} description={e.description} id={e.id}/>
    ))
    
    return (
      <div className="Home">
       Welcome to <b>Microblog</b>
       {postList}
      </div>
    );
  }
}

export default Home;