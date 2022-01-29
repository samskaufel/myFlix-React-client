import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { Link } from "react-router-dom";

import "./movie-view.scss";

export class MovieView extends React.Component {

  addFavoriteMovie() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    axios.post(`https://myflix-api-project.herokuapp.com/users/${user}/movies/${this.props.movie._id}`, {}, {
        headers: { Authorization: `Bearer ${token}` },
        method: 'POST',
    })
        .then((response) => {
            alert(`Added to Favorites List`)
        })
        .catch(function (error) {
            console.log(error);
        });
  };

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.ImagePath} crossOrigin="true" />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>Description: {movie.Description}</Card.Text>
        </Card.Body>

        <ListGroup key={movie._id} className="list-group-flush">
          <ListGroupItem>
            Genre:
            <Link to={`/genres/${movie.Genre.Name}`}>
              <Button variant="link">{movie.Genre.Name}</Button>
            </Link>
          </ListGroupItem>

          <ListGroupItem>
            Director:
            <Link to={`/directors/${movie.Director.Name}`}>
              <Button variant="link">{movie.Director.Name}</Button>
            </Link>
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button
            variant="link"
            onClick={() => {
              onBackClick(null);
            }}
          >
            Back
          </Button>
          <Button variant="outline-primary" className="btn-outline-primary" value={movie._id} onClick={(e) => this.addFavoriteMovie(e, movie)}>Favorite</Button>
        </Card.Body>
      </Card>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
    }),
    Featured: PropTypes.bool,
    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};
