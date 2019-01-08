import React, { Component } from 'react';
import TitleList from '../Components/TitleList'
import {connect} from 'react-redux'

class Home extends Component {
  render() {
   
    return (
      <div className="Home">
      <div>
      <p>
       Welcome to <b>Microblog</b>
       </p>
       </div>
       <div>
       <i>Get in the Rithm of blogging!</i>
       </div>

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