import { ADD_COMMENT, DELETE_COMMENT, HANDLE_POST } from './actionTypes';

function rootReducer(state = {  blogPosts: {
  '1':{
    id: '1',
    title: 'Spaghetti and Meatballs Recipe',
    description: 'Make Spaghetti and Meatballs in 5 Minutes!',
    body: `Delicious pasta sorprese al dente, pasta sauce capellini cavatelli ravioli sauce tortellini spaghettini. Spaghetti tortellini ziti fettuccine, ravioli rotelle fettuccine tortellini tomatoes tomatoes sauce basil. Rotelle rotelle rotelle, pasta ziti lasagna pasta macaroni lasagna cavatelli sauce.
    Lasagna vermicelli al dente cheesy spaghetti ziti, spaghettini angel hair fiorentine sorprese sorprese. Anelli ditalini fettuccine ditalini cheesy fiorentine cheesy, sauce cheesy ravioli pasta tripoline. Tripoline tomatoes spaghettini tomatoes sauce fiorentine, linguini basil anelli penne rotelle. Angel hair carbonara angel hair, sorprese ditalini macaroni al dente ziti tripoline cavatelli. Macaroni al dente cavatelli lasagna fiorentine rotelle rotelle tortellini.`,
    comments: [{id: 1, text: 'Well done, sir!'}]
  },
  '2': {
    id: '2',
    title: '10 Ways To Eat Amazing Pasta',
    description: 'Eat Amazing Pasta in 10 Ways',
    body: `Carbonara basil spaghettini cavatelli al dente sorprese fiorentine capellini. Fettuccine tripoline rotelle cheesy penne spaghettini fettuccine spaghettini capellini, cavatelli capellini spaghettini carbonara. Cavatelli angel hair al dente tortellini basil, tomatoes lasagna delicious macaroni fettuccine lasagna carbonara.

    Delicious tortellini anelli vermicelli al dente, cavatelli tortellini rotelle delicious carbonara ditalini capellini penne cheesy. Fettuccine sauce al dente, fettuccine angel hair cheesy fiorentine anelli angel hair sauce. Carbonara delicious basil cheesy anelli sorprese tomatoes sorprese, pasta al dente lasagna sauce carbonara penne.`,
    comments: [
      { id: 1, text: 'this site sux' },
      { id: 2, text: 'screw u bro' },
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
