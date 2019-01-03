import React, { Component } from 'react';
import PostCard from './PostCard'

class TitleList extends Component {
  
  render() {
    let postList=[];

    for(let post in this.props.blogPosts){
        let singlePost = this.props.blogPosts[post]
        postList.push(<PostCard title={singlePost.title} description={singlePost.description} key={singlePost.id} id={singlePost.id}/>)
    }
    
    return (
      <div className="TitleList">
       {postList}
      </div>
    );
  }
}

export default TitleList;