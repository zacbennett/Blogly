import React, { Component } from 'react';
import uuid from 'uuid/v4';

class PostForm extends Component {
  static defaultProps = {
    post: { title: '', description: '', body: '', comments: [] }
  };

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.post.title,
      description: this.props.post.description,
      body: this.props.post.body
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //changes state whenever search value is changed.
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    let post = {
      id: this.props.post.id || uuid(),
      title: this.state.title,
      description: this.state.description,
      body: this.state.body,
      comments: this.props.post.comments
    };
    let editOrNew = this.props.match.url === '/new' ? 'new' : 'edit';

    this.props.handlePost(post, editOrNew);

    this.setState({
      title: '',
      description: '',
      body: ''
    });

    this.props.history.push('/');
  }

  render() {
    let title = this.props.match.url === '/new' ? 'New Post' : 'Edit Post';

    return (
      <div className="PostForm">
        {title}
        <form onSubmit={this.handleSubmit} method="get">
          <label htmlFor="postform-title">Title:</label>
          <input
            type="text"
            id="postform-title"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <label htmlFor="postform-description">Description:</label>
          <input
            type="text"
            id="postform-description"
            name="description"
            onChange={this.handleChange}
            value={this.state.description}
          />
          <label htmlFor="postform-body">Body:</label>
          <input
            type="text"
            id="postform-body"
            name="body"
            onChange={this.handleChange}
            value={this.state.body}
          />
          <button>Add Post</button>
          <button onClick={this.props.returnHome}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
