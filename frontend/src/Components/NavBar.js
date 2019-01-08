import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'
class NavBar extends Component {
  render() {
    
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <div>
                    MicroBlog
                    
                </div>
                <div>
                    <NavLink to="/"><b>Blog</b></NavLink>
                    <NavLink to="/new">Add a new post</NavLink>
                </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
