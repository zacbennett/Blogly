import { ADD_COMMENT, DELETE_COMMENT, HANDLE_POST } from './actionTypes';

export function addComment(postId, comment) {
  return { type: ADD_COMMENT, postId, comment };
}

export function deleteComment(postId, commentId) {
  return { type: DELETE_COMMENT, postId, commentId };
}

export function handlePost(post, postType) {

  let newPost;
  
  if (postType === 'New') {
    let newId = post.id;
    newPost = { [newId]: post };
  } else if (postType === 'Edit') {
    newPost = { [post.id]: post };

  }

  return { type: HANDLE_POST, newPost};
}
