import { ADD_COMMENT, DELETE_COMMENT, HANDLE_POST } from './actionTypes';

function rootReducer(state = {  blogPosts: {
  1:{
    id: 1,
    title: 'test',
    description: 'desc test',
    body: 'body test',
    comments: []
  },
  2: {
    id: 2,
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

  switch (action.type) {
    case HANDLE_POST:
      return {...state.blogPosts, ...action.newPost};
    

    case REMOVE_TODO:
      return { todos: state.todos.filter(todo => todo.id !== action.id) };

    default:
      return state;
  }
}

export default rootReducer;
