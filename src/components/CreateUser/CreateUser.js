import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// eslint-disable-next-line
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import UserService from '../../services/UserService';
import FileUploader from '../../shared/components/FileUploader';

const CreateUser = () => {
  const history = useHistory();
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const response = await UserService.addUser(user, selectedImage);
    // eslint-disable-next-line
    console.log(response);
    history.push('/users');
  };

  return (
    <div>
      <h1>Create user</h1>
      <Form onSubmit={handleOnSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="Ex: Juan Perez" onChange={handleOnChange} />
        </FormGroup>
        <FileUploader
          onFileSelectError={({ error }) => console.log(error)}
          onFileSelectSuccess={(file) => setSelectedImage(file)}
        />
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="text" name="email" id="email" placeholder="Ex: jperez@sample.com" onChange={handleOnChange} />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Type your Password"
            onChange={handleOnChange}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default CreateUser;
