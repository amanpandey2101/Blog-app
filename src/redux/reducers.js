const initialState = {
    posts: [],
    loading: false,
    error: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_POSTS_SUCCESS':
        return {
          ...state,
          posts: action.payload,
          loading: false,
          error: null,
        };
      case 'FETCH_POSTS_ERROR':
        return {
          ...state,
          posts: [],
          loading: false,
          error: action.payload,
        };
      case 'ADD_POST':
        return {
          ...state,
          posts: [...state.posts, action.payload],
        };
      case 'DELETE_POST':
        return {
          ...state,
          posts: state.posts.filter((post) => post.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  