import React from 'react';
import { func } from 'prop-types';
import CreateForm from './CreateForm';

import './Create.css';

const Create = (props) => {
  const { addPost, resetPostForm } = props;
  return (
    <div className="Create">
      <h1>Crear nuevo Post</h1>
      <CreateForm addPost={addPost} resetPostForm={resetPostForm} />
    </div>
  );
};

Create.propTypes = {
  addPost: func,
  resetPostForm: func,
};

export default Create;
