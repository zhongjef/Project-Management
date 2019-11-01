import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class TasksBoard extends Component {
  state = {};
  render() {
    return (
      <container className="container-fluid">
        <Card className="d-inline-flex mx-auto" style={{ width: "18rem" }}>
          <Card.Img
            className="rounded"
            variant="top"
            src="https://img1.mukewang.com/5ab465400001a79c03000300.jpg"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </container>
    );
  }
}

export default TasksBoard;
