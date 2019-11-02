import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class LeftPanel extends Component {
  render() {
    return (
      <List-group className="d-inline-block">
        <button className="rounded-0 list-group-item list-group-item-action text-center active ">
          Users
        </button>
        <button className="list-group-item list-group-item-action text-center">
          Teams
        </button>
        <button className="list-group-item list-group-item-action list-group-item-danger text-center">
          <span style={{ color: "red" }}>Logout</span>
        </button>
      </List-group>
    );
  }
}

export default LeftPanel;
