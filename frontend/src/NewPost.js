import React, { Component } from 'react';
import NewPostDisp from './NewPostDisp'

class NewPost extends Component {
    constructor(props) {
        super(props);
    }

  render() {
   
    return (
      <div className="NewPost">
        <NewPostDisp {...this.props}/>
      </div>
    );
  }
}

export default NewPost;