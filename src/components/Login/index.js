import React, { Component } from 'react';
import { object, func } from 'prop-types';
// eslint-disable-next-line
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { doLogin, history } = this.props;
    doLogin(email, password);
    history.push('/');
  };

  handleOnChange = (e) => {
    const {
      target: { value, name },
    } = e;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="Login">
        <h1>Login</h1>
        <Form onSubmit={this.handleOnSubmit}>
          <FormGroup>
            <Label for="email">Email: </Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Ex: admin@admin.com"
              onChange={this.handleOnChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password: </Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Your Password"
              onChange={this.handleOnChange}
            />
          </FormGroup>
          <Button>Login</Button>
        </Form>
      </div>
    );
  }
}

Login.propTypes = {
  doLogin: func,
  history: object,
};

export default withRouter(Login);
