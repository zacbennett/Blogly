import React, { Component } from 'react';
import DispPost from './DispPost';


class Post extends Component {
  render() {
    console.log(this.props)   
    return <div>
            <DispPost {...this.props} />
          </div>
  }
}

export default Post;
