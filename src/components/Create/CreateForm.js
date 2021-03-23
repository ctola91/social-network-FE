import React, { Component } from 'react';
import { func } from 'prop-types';
import { Form, Control } from 'react-redux-form';
import { FormGroup, Label, Button } from 'reactstrap';

class CreateForm extends Component {
  handleOnSubmit = (values) => {
    this.handleAddNewPost(values);
  };

  handleAddNewPost = (values) => {
    const { addPost, resetPostForm } = this.props;
    if (values.title) {
      addPost({
        title: values.title,
      });
    }
    resetPostForm();
  };

  attachDispatch = (dispatch) => {
    this.formDispatch = dispatch;
  };

  render() {
    return (
      <>
        <Form
          className="CreateForm"
          model="postForm"
          onSubmit={(values) => this.handleOnSubmit(values)}
          getDispatch={(dispatch) => this.attachDispatch(dispatch)}
        >
          <FormGroup>
            <Label for="title">Title</Label>
            <Control.text model=".title" id="title" name="title" className="form-control" placeholder="Post Title" />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Control.textarea
              model=".description"
              id="description"
              className="form-control"
              placeholder="Post Content"
            />
          </FormGroup>
          <FormGroup>
            <Label for="user">User</Label>
            <Control.text model=".user" id="user" name="user" className="form-control" placeholder="Post User" />
          </FormGroup>
          <Button type="submit">Enviar</Button>
        </Form>
      </>
    );
  }
}

CreateForm.propTypes = {
  addPost: func,
  resetPostForm: func
};

export default CreateForm;
