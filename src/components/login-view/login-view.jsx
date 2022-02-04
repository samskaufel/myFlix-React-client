import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import "./login-view.scss";

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Declare hook for each input
  const [usernameErr, setUsernameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  // validate user inputs
  const validate = () => {
    let isReq = true;
    if (!username) {
      setUsernameErr("Username Required");
      isReq = false;
    } else if (username.length < 3) {
      setUsernameErr("Username must be 3 characters long");
      isReq = false;
    }
    if (!password) {
      setPasswordErr("Password Required");
      isReq = false;
    } else if (password.length < 4) {
      setPassword("Password must be 4 characters long");
      isReq = false;
    }

    return isReq;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      /* Send a request to the server for authentication */
      axios
        .post("https://myflix-api-project.herokuapp.com/login", {
          Username: username,
          Password: password,
        })
        .then((response) => {
          const data = response.data;
          props.onLoggedIn(data);
        })
        .catch((e) => {
          console.log("no such user");
        });
    }
  };

  return (
    <Row className='mt-5'>
      <Col md={12}>
    <Form>
    <h3>User Login</h3>
          <p></p>
      <Form.Group controlId="formUsername" className='reg-form-inputs'>
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {/* code added here to display validation error */}
        {usernameErr && <p>{usernameErr}</p>}
      </Form.Group>
      <p></p>
      <Form.Group controlId="formPassword" className='reg-form-inputs'>
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* code added here to display validation error */}
        {passwordErr && <p>{passwordErr}</p>}
      </Form.Group>
      <p></p>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Sign In
      </Button>
      <p></p>
          <p>
            New user? <Link to={"/register"}>Register here</Link>
          </p>
    </Form>
    </Col>
    </Row>
  );
}

LoginView.propTypes = {
  login: PropTypes.shape({
  Username: PropTypes.string.isRequired,
  Password: PropTypes.string.isRequired,
  }),
  onLoggesIn:PropTypes.func,
};
