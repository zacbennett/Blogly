import React, { Component } from 'react';
import PostCard from './PostCard'

class TitleList extends Component {
  
  render() {
    let postList = this.props.blogPosts.map(e=>(
        <PostCard title={e.title} description={e.description} id={e.id}/>
    ))
    
    return (
      <div className="TitleList">
       {postList}
      </div>
    );
  }
}

export default TitleList;