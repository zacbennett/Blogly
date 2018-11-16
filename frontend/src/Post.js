import React, { Component } from 'react';
import DispPost from './DispPost';
import { connect } from 'react-redux';
import { addComment,deleteComment,handlePost } from './actionCreators';


class Post extends Component {
  render() {

    return <div>
            <DispPost {...this.props}/>
          </div>
  }
}

function mapStateToProps(state,props){
  return { post:state.blogPosts[props.match.params.id.toString()], }
}

export default connect(mapStateToProps, {addComment,deleteComment,handlePost} )(Post)
