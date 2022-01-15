import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from "react-bootstrap/ListGroupItem";

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
            Born: {movie.Director.Born} <br />
            Died: {movie.Director.Died}
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
      Born: PropTypes.date,
      Died: PropTypes.date,
    }),
    Featured: PropTypes.bool,
    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};