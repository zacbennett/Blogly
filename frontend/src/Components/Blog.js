import React, { Component } from 'react';
import NavBar from './NavBar';
import Routes from './Routes';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    if (this.state.isLoading === true) {
      return <h1>Loading...</h1>;
    }

    return (
      <div className="App">
        <NavBar />
        <Routes
        
        />
      </div>
    );
  }
}

export default Blog;
