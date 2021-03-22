import {
  ADD_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POST_SUCCESS,
  UPDATE_POST_SUCCESS,
} from '../actions/actionTypes';
import { getNewState } from '../shared/utils/frontend';

const initialState = {
  posts: [],
  total: 0,
  seletedPost: null,
  isLoading: false,
};

export default function postReducer(state = initialState, action) {
  // verificar el tipo de accion y ejecutar una actualizacion del estado
  switch (action.type) {
    case FETCH_POSTS_REQUEST: {
      // actualizar el estado
      return getNewState(state, {
        isLoading: true,
      });
    }
    case FETCH_POSTS_SUCCESS: {
      const {
        payload: { posts, count },
      } = action; // const posts = action.payload.posts
      return getNewState(state, {
        posts,
        total: count,
        isLoading: false,
      });
    }
    case FETCH_POSTS_ERROR: {
      return getNewState(state, {
        isLoading: false,
      });
    }
    case ADD_POST_SUCCESS: {
      const {
        payload: { post },
      } = action;
      const newPosts = [...state.posts, post];
      return getNewState(state, {
        posts: newPosts,
        selectedPost: post,
      });
    }
    case FETCH_POST_SUCCESS: {
      const {
        payload: { post },
      } = action;
      return getNewState(state, {
        selectedPost: post,
      });
    }
    case DELETE_POST_SUCCESS: {
      const {
        payload: { id },
      } = action;
      const filteredPosts = state.posts.filter((post) => post.id !== id);
      return getNewState(state, {
        posts: filteredPosts,
      });
    }
    case UPDATE_POST_SUCCESS: {
      const {
        payload: { updatePost },
      } = action;
      const index = state.posts.findIndex((post) => post.id === updatePost.id);
      const filteredPosts = state.posts.filter((post) => post.id !== index);
      filteredPosts.splice(index, 0, updatePost);
      return getNewState(state, {
        posts: filteredPosts,
      });
    }
    default: {
      return state;
    }
  }
}
