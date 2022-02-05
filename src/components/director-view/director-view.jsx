import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { ListGroupItem } from "react-bootstrap";

export function DirectorView(props) {
  const { director, onBackClick } = props;
  console.log(director);

  return (
    <Card style={{ width: "36rem" }}>
      <Card.Header className="director-name">{director.Name}</Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroupItem>
            <div className="director-bio">
              <span className="label">Bio: </span>
              <span className="value">{director.Bio}</span>
            </div>
          </ListGroupItem>
          <ListGroupItem>
            <div className="director-born">
              <span className="label">Born: </span>
              <span className="value">
                {new Date(director.Born).toLocaleDateString()}
              </span>
            </div>
          </ListGroupItem>
          <ListGroupItem>
            <div className="director-died">
              <span className="label">Died: </span>
              <span className="value">
                {new Date(director.Died).toLocaleDateString()}
              </span>
            </div>
          </ListGroupItem>
        </ListGroup>
      </Card.Body>
      <Card.Footer>
        <Button
          variant="link"
          onClick={() => {
            onBackClick(null);
          }}
        >
          Back
        </Button>
      </Card.Footer>
    </Card>
  );
}
