import React, { Component } from 'react';
import PostForm from './PostForm';

class NewPostDisp extends Component {
    constructor(props) {
        super(props);
        }

  render() {
      
    return <div className="PostCard card">
                <PostForm {...this.props} isEdit={false}/>
            </div>;
  }
}

export default NewPostDisp;
