import API from '../api/api';

const URL_POSTS = '/posts';

const getPosts = async (from = 0, limit = 5) => {
  const queryParams = `?from=${from}&limit=${limit}`;
  const response = await API.get(`${URL_POSTS}${queryParams}`);
  if (response.error) {
    throw new Error('Ha ocurrido un error');
  }
  return response;
};

const addPost = async (post) => {
  const response = await API.post(`${URL_POSTS}`, post);
  if (response.error) {
    throw new Error('No se a podido crear el post');
  }
  return response;
};

const getPost = async (id) => {
  const response = await API.get(`${URL_POSTS}/${id}`);
  if (response.error) {
    throw new Error('No se a podido obtener el post');
  }
  return response;
};

const deletePost = async (id) => {
  const response = await API.delete(`${URL_POSTS}/${id}`);
  if (response.error) {
    throw new Error('Ha ocurrido un error al borrar el elemento');
  }
  return response;
};

const updatePost = async (post) => {
  const response = await API.put(`${URL_POSTS}/${post.id}`, post);
  if (response.error) {
    throw new Error('Ha ocurrido un error al borrar el elemento');
  }
  return response;
};

export default {
  getPosts,
  getPost,
  addPost,
  deletePost,
  updatePost,
};
