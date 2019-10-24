/*  Full LogIn component */
// Everything here was previously in the App component.
import React from 'react';
import '../Login.css';
// Importing components
import {Button, FormGroup, FormControl, Container, ControlLabel, Form} from 'react-bootstrap';
const log = console.log

class Login extends React.Component {
  
  // From Queue.js
  // Generic handler for whenever we type in an input box.

  render() {
    return (
      <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
    
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    );
  }
}

export default Login;