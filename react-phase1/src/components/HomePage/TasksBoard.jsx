import React, { Component } from "react";
import Taskcard from "../ManageProjectPage/Taskcard";

class TasksBoard extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <Taskcard />
        <Taskcard />
        <Taskcard />
        <Taskcard />
        <Taskcard />
        <Taskcard />
        <Taskcard />
        <Taskcard />
      </div>
    );
  }
}

export default TasksBoard;
