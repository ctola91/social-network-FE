import API from '../api/api';
// import firebase from './firebase';
// import 'firebase/storage';

const URL_USERS = '/users';

// const storage = firebase.storage();

const getUsers = async () => {
  const response = await API.get(
    `${URL_USERS}`,
    {},
    {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    }
  );
  if (response.error) {
    throw new Error('something not works!!');
  }
  return response;
};

// const uploadImage = async (image, name) => {
//   const storageRef = storage.ref();
//   const usersRef = storageRef.child(`images/${name}.jpg`);
//   const snapshot = await usersRef.put(image);
//   if (!snapshot) {
//     throw new Error('file not found');
//   }
// };

const addUser = async (user, image) => {
//   uploadImage(image, user.name.split(' ').join('_'));
  const response = await API.post(`${URL_USERS}`, user);
  if (response.error) {
    throw new Error('No se a podido crear el user');
  }
  return response;
};

const getUser = async (id) => {
  const response = await API.get(`${URL_USERS}/${id}`);
  if (response.error) {
    throw new Error('No se a podido obtener el user');
  }
  return response;
};

const deleteUser = async (id) => {
  const response = await API.delete(`${URL_USERS}/${id}`);
  if (response.error) {
    throw new Error('Ha ocurrido un error al borrar el elemento');
  }
  return response;
};

const updateUser = async (user) => {
  const response = await API.put(`${URL_USERS}/${user.id}`, user);
  if (response.error) {
    throw new Error('Ha ocurrido un error al borrar el elemento');
  }
  return response;
};

const doLogin = async (email, password) => {
  const response = await API.post('/login', { email, password });
  if (response.error) {
    throw new Error('not authorized');
  }
  return response;
};

// const getURLImage = async (name) => {
//   const pathRef = storage.ref(`images/${name.split(' ').join('_')}.jpg`);
//   const url = await pathRef.getDownloadURL();
//   if (!url) {
//     throw new Error('image not found');
//   }
//   return url;
// };

export default {
  getUsers,
  getUser,
  addUser,
  deleteUser,
  updateUser,
  doLogin,
//   getURLImage,
};
