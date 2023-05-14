import axios from 'axios';

export const fetchPosts = (searchTerm = '', sortBy = '') => {
  return async (dispatch) => {
    try {
      let url = 'https://jsonplaceholder.typicode.com/posts';
      if (searchTerm) {
        url += `?q=${searchTerm}`;
      }
      if (sortBy) {
        url += `?sort=${sortBy}`;
      }
      const response = await axios.get(url);
      dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: response.data });

    } catch (error) {
      dispatch({ type: 'FETCH_POSTS_ERROR', payload: error.message });
    }
  };
};

export const addPost = (post) => {
  return {
    type: 'ADD_POST',
    payload: post,
  };
};

export const deletePost = (postId) => {
  return {
    type: 'DELETE_POST',
    payload: postId,
  };
};
