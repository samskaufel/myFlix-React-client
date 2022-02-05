import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { Link } from "react-router-dom";

export function RegistrationView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  // Declare hook for each input
  const [usernameErr, setUsernameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [birthdayErr, setBirthdayErr] = useState("");

  // Validate user inputs
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
      setPasswordErr("Password must be 4 characters long");
      isReq = false;
    }
    if (!email) {
      setEmailErr("Email Required");
      isReq = false;
    } else if (email.indexOf("@") === -1) {
      setEmailErr("Invalid email");
      isReq = false;
    }
    if (!birthday) {
      setBirthdayErr("Birthday Required");
      isReq = false;
    } else if (birthday.length < 10) {
      setBirthdayErr("MM/DD/YYYY format required");
      isReq = false;
    }

    return isReq;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      axios
        .post("https://myflix-api-project.herokuapp.com/users", {
          Username: username,
          Password: password,
          Email: email,
          Birthday: birthday,
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
          alert("Registration successful, please login");
          window.open("/", "_self");
        })
        .catch((response) => {
          console.error(response);
          alert("Unable to register");
        });
    }
  };

  return (
    <Row className="mt-5">
      <Col md={12}>
        <Form>
          <h3>New User Registration</h3>
          <p></p>
          <Form.Group controlId="formUsername" className="reg-form-inputs">
            <Form.Label>Create Username:</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {usernameErr && <p>{usernameErr}</p>}
          </Form.Group>
          <p></p>
          <Form.Group controlId="formPassword" className="reg-form-inputs">
            <Form.Label>Create Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordErr && <p>{passwordErr}</p>}
          </Form.Group>
          <p></p>
          <Form.Group controlId="Email" className="reg-form-inputs">
            <Form.Label>Enter Valid Email:</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailErr && <p>{emailErr}</p>}
          </Form.Group>
          <p></p>
          <Form.Group controlId="updateBirthday">
            <Form.Label>Birthday:</Form.Label>
            <Form.Control
              type="date"
              name="birthday"
              onChange={(e) => setBirthday(e.target.value)}
            />
            {birthdayErr && <p>{birthdayErr}</p>}
          </Form.Group>
          <p></p>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Sign Up
          </Button>
          <p></p>
          <p>
            Already registered? <Link to={"/"}>Login here</Link>
          </p>
        </Form>
      </Col>
    </Row>
  );
}

RegistrationView.propTypes = {
  register: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.string.isRequired,
  }),
  onRegistration: PropTypes.func,
};
