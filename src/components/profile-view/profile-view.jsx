import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { Link } from "react-router-dom";

export class ProfileView extends React.Component {
  constructor() {
    super();
    this.state = {
      Username: null,
      Password: null,
      Email: null,
      Birthday: null,
      FavoriteMovies: [],
    };
  }

  componentDidMount() {
    const accessToken = localStorage.getItem("token");
    this.getUser(accessToken);
  }

  onLoggedOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.setState({
      user: null,
    });
    window.open("/", "_self");
  }

  getUser = (token) => {
    const Username = localStorage.getItem("user");
    axios
      .get(`https://myflix-api-project.herokuapp.com/users/${Username}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.setState({
          Username: response.data.Username,
          Password: response.data.Password,
          Email: response.data.Email,
          Birthday: response.data.Birthday,
          FavoriteMovies: response.data.FavoriteMovies,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // Allow user to edit or update profile
  editUser = (e) => {
    e.preventDefault();
    const Username = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    axios
      .put(
        `https://myflix-api-project.herokuapp.com/users/${Username}`,
        {
          Username: this.state.Username,
          Password: this.state.Password,
          Email: this.state.Email,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        this.setState({
          Username: response.data.Username,
          Password: response.data.Password,
          Email: response.data.Email,
        });

        localStorage.setItem("user", this.state.Username);
        const data = response.data;
        console.log(data);
        console.log(this.state.Username);
        alert("Profile updated");
        window.open(`/users/${user}`, "_self");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // Delete a movie from FavoriteMovies list
  onRemoveFavorite = (e, movie) => {
    const username = localStorage.getItem("user");
    console.log(username);
    const token = localStorage.getItem("token");
    axios
      .delete(
        `https://myflix-api-project.herokuapp.com/users/${username}/movies/${movie._id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        console.log(response);
        alert(`${movie.Title} was removed from your favorites.`);
        this.componentDidMount();
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };

  // Deregister
  onDeleteUser() {
    const answer = window.confirm(
      "Are you sure you want to delete your profile?"
    );
    if (answer) {
      const user = localStorage.getItem("user");
      const token = localStorage.getItem("token");

      axios
        .delete(`https://myflix-api-project.herokuapp.com/users/${user}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log(response);
          alert("Profile deleted");
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          window.open("/", "_self");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  setUsername(value) {
    this.setState({
      Username: value,
    });
    this.Username = value;
  }

  setPassword(value) {
    this.setState({
      Password: value,
    });
    this.Password = value;
  }

  setEmail(value) {
    this.setState({
      Email: value,
    });
    this.Email = value;
  }

  setBirthday(value) {
    this.setState({
      Birthday: value,
    });
    this.Birthday = value;
  }

  render() {
    const { movies } = this.props;
    const { FavoriteMovies, Username, Email, Birthday } = this.state;

    return (
      <Container className="profile-view">
        <Row className="mb-2">
          <Col className="mb-2">
            <Card className="user-profile">
              <Card.Header>Profile</Card.Header>
              <Card.Body>
                <Card.Text>
                  <span className="label">Username: </span>
                  <span className="value">{Username}</span>
                </Card.Text>
                <Card.Text>
                  <span className="label">Email: </span>
                  <span className="value">{Email}</span>
                </Card.Text>
                <Card.Text>
                  <span className="label">Birthday: </span>
                  <span className="value">
                    {new Date(Birthday).toLocaleDateString()}
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-2">
            <Card>
              <Card.Header>Update Profile</Card.Header>
              <Card.Body>
                <Form
                  className="update-form"
                  onSubmit={(e) =>
                    this.editUser(e, this.Username, this.Password, this.Email)
                  }
                >
                  <Form.Group
                    controlId="formUpdateUsername"
                    className="reg-form-inputs"
                  >
                    <Form.Label>Change Username</Form.Label>
                    <Form.Control
                      type="text"
                      name="Username"
                      placeholder="Enter New Username"
                      onChange={(e) => this.setUsername(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <p></p>
                  <Form.Group
                    controlId="formUpdatePassword"
                    className="reg-form-inputs"
                  >
                    <Form.Label>Change Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="Password"
                      placeholder="Enter New Password"
                      onChange={(e) => this.setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <p></p>
                  <Form.Group
                    controlId="formUpdateEmail"
                    className="reg-form-input"
                  >
                    <Form.Label>Change Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="Email"
                      placeholder="Enter Valid Email"
                      onChange={(e) => this.setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <p></p>

                  <Form.Group className="button-group">
                    <Button
                      variant="warning"
                      type="submit"
                      onClick={() => this.editUser}
                    >
                      Update User Info
                    </Button>

                    <Button
                      className="delete-button"
                      variant="danger"
                      onClick={() => this.onDeleteUser()}
                    >
                      Delete User Profile
                    </Button>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Container className="user-favorites">
            <Card className="user-favorites-container">
              <Card.Header className="user-favorites-header">
                My Favorites
              </Card.Header>
              <Card.Body>
                {FavoriteMovies.length === 0 && (
                  <div className="text-center">No Favorite Movies</div>
                )}
                {FavoriteMovies.length > 0 &&
                  movies.map((movie) => {
                    if (
                      movie._id ===
                      FavoriteMovies.find((fav) => fav === movie._id)
                    ) {
                      return (
                        <Container className="card-holder" key={movie._id}>
                          <Card
                            style={{ width: "18rem" }}
                            className="favorite-movie"
                          >
                            <Card.Img
                              className="fav-poster"
                              variant="top"
                              src={movie.ImagePath}
                              crossOrigin="true"
                            />
                            <Card.Body className="favorite-movie-body">
                              <Card.Title className="movie-title">
                                {movie.Title}
                              </Card.Title>
                              <Button
                                size="sm"
                                variant="outline-danger"
                                value={movie._id}
                                onClick={(e) => this.onRemoveFavorite(e, movie)}
                              >
                                Remove
                              </Button>
                            </Card.Body>
                          </Card>
                        </Container>
                      );
                    }
                  })}
              </Card.Body>
            </Card>
          </Container>
        </Row>
      </Container>
    );
  }
}
