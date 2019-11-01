import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Taskcard from "../ProjectsPage/Taskcard";

class TasksBoard extends Component {
  state = {};
  render() {
    return (
      <container className="container-fluid">
        <Taskcard />
        <Taskcard />
        <Taskcard />
        <Taskcard />
        <Taskcard />
        <Taskcard />
        <Taskcard />
        <Taskcard />
      </container>
    );
  }
}

export default TasksBoard;
