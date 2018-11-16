import { ADD_COMMENT, DELETE_COMMENT, HANDLE_POST } from './actionTypes';

function rootReducer(state = {  blogPosts: {
  '1':{
    id: '1',
    title: 'test',
    description: 'desc test',
    body: 'body test',
    comments: []
  },
  '2': {
    id: '2',
    title: 'testsdf',
    description: 'desc testsadf',
    body: 'body testdsaf',
    comments: [
      { id: 1, text: 'this site sux' },
      { id: 2, text: 'fuck u bro' },
      { id: 3, text: 'i hate the internet' }
    ]
  }
}},action) {

  console.log('reducer ran; state & action:', state, action);

  let newState;

  switch (action.type) {
    case HANDLE_POST:
      return {blogPosts:{...state.blogPosts, ...action.newPost}};
    
    case DELETE_COMMENT:
      let newPost = state.blogPosts[action.postId] 
      let newComments = newPost.comments.filter(e=>e.id!==action.commentId)
      newPost.comments = newComments
      return {blogPosts:{...state.blogPosts,[newPost.id]:{...newPost}}};

    case ADD_COMMENT:
      newState = {...state.blogPosts}  
      newState[action.postId].comments.push(action.comment)
      return {blogPosts:{...newState}};

    default:
      return state;
  }
}

export default rootReducer;
