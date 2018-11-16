import React, { Component } from 'react';
import TitleList from './TitleList'
import {connect} from 'react-redux'

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

function mapStateToProps(state){
  return {blogPosts:state.blogPosts}
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(Home);