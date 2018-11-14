import React, { Component } from 'react';
import NavBar from './NavBar'
import Routes from './Routes'


class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoading:true};
        this.handlePost=this.handlePost.bind(this)
    }

    async handlePost(post) {
        //when connecting to backend, should post to backend.
        this.setState({ blogPosts: [...this.state.blogPosts,post], isLoading: false });
      }
    

    async componentDidMount() {
        //needs to fetch data from backend.
        let blogPosts = [
            {   id:1,
                title:'test',
                description:'desc test',
                body:'body test',
                comments:[]
            },
            {   id:2,
                title:'testsdf',
                description:'desc testsadf',
                body:'body testdsaf',
                comments:['this site sux']
            }
        ]

        this.setState({ blogPosts, isLoading: false });
    } 
      

  render() {
    if(this.state.isLoading === true){
        return <h1>Loading...</h1>
      }
   
    return (
      <div className="App">
        <NavBar  />
        <Routes blogPosts={this.state.blogPosts} handlePost={this.handlePost}/>
      </div>
    );
  }
}

export default Blog;