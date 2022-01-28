import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { Link } from "react-router-dom";

import "./movie-view.scss";

export class MovieView extends React.Component {
  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Card style={{ width: "36rem" }}>
        <Card.Img variant="top" src={movie.ImagePath} crossOrigin="true" />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>Description: {movie.Description}</Card.Text>
        </Card.Body>

        <ListGroup key={movie._id} className="list-group-flush">
          <ListGroupItem>Genre: {movie.Genre.Name}</ListGroupItem>
          <ListGroupItem>
            Director: {movie.Director.Name} <br />
            Bio: {movie.Director.Bio} <br />
            Born: {new Date(movie.Director.Born).toLocaleDateString()} <br />
            Died: {new Date(movie.Director.Died).toLocaleDateString()}
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
          <Link to={`/directors/${movie.Director.Name}`}>
            <Button variant="link">Director</Button>
          </Link>

          <Link to={`/genres/${movie.Genre.Name}`}>
            <Button variant="link">Genre</Button>
          </Link>
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
      Description: PropTypes.string.isRequired,
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Born: PropTypes.string,
      Died: PropTypes.string,
    }),
    Featured: PropTypes.bool,
    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};
