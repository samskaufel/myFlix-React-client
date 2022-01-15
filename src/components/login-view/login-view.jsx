import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
  };

  return (
    <Form>
      <Form.Group className='mb-3' controlId='formUsername'>
        <Form.Label>Username:</Form.Label>
        <Form.Control type='text' placeholder='Username' onChange={e => setUsername(e.target.value)} />
      </Form.Group>
      
      <Form.Group className='mb-3' controlId='formPassword'>
        <Form.Label>Password:</Form.Label>
        <Form.Control type='password' placeholder='Password' onChange={e => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant='primary' type='submit' onClick={handleSubmit}>Login</Button>
    </Form>
  );
}

LoginView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired
};