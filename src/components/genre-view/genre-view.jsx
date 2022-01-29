import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

export function GenreView(props) {
  const { genre, onBackClick } = props;
  console.log(genre);
  return (
    <Card style={{ width: "36rem" }}>
      <Card.Header className="genre-view">{genre.Name}</Card.Header>
      <ListGroup variant="flush">
        <ListGroupItem>
          <div className="genre-description">
            <span className="label">Description: </span>
            <span className="value">{genre.Description}</span>
          </div>
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
