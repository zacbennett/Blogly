import React, { Component } from 'react';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.post.title || '',
      description: this.props.post.description||'',
      body: this.props.post.body||'',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  //changes state whenever search value is changed.
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  cancel(evt){
    return this.props.history.push('/')
  }

  async handleSubmit(evt) {
      evt.preventDefault();
      let post = {
        id:Math.floor(Math.random()*100),
        title: this.state.title,
        description: this.state.description,
        body: this.state.body,
        comments:this.props.post.comments || []
      };

        this.props.handlePost(post);

        this.setState({
          title: '',
          description: '',
          body: '',
        });

        this.props.history.push('/');
  }
  

  render() {
    let title = (this.props.match.url==='/new') ? 'New Post':'Edit Post'

    return (
      <div className="PostForm">
        {title}
        <form onSubmit={this.handleSubmit} method="get">
          <label htmlFor="newPost">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <label htmlFor="newPost">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            onChange={this.handleChange}
            value={this.state.description}
          />
          <label htmlFor="newPost">Body:</label>
          <input
            type="text"
            id="body"
            name="body"
            onChange={this.handleChange}
            value={this.state.body}
          />
          <button>Add Post</button>
          <button onClick={this.cancel}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default PostForm;