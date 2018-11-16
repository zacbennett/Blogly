import React, { Component } from 'react';
import NewPostDisp from './NewPostDisp';
import {connect} from 'react-redux'
import {handlePost} from './actionCreators'


class NewPost extends Component {

  render() {
   
    return (
      <div className="NewPost">
        <NewPostDisp {...this.props} />
      </div>
    );
  }
}

export default connect(null,{handlePost})(NewPost)
