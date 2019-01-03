import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PostCard.css'
class PostCard extends Component {

  render() {
    let style = {};
    
    return (
      <div className="PostCard card" style={style}>
        <div className="card-body">
          <Link to={`/${this.props.id}`}><h5 className="card-title">{this.props.title}</h5></Link>
          <p className="card-text">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default PostCard;
