import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Redirect } from "react-router-dom";

class LeftPanel extends Component {
  state = {
    showUsers: true
  };
  render() {
    return (
      <List-group className="d-inline-block">
        <button
          onClick={this.handleUsersTab}
          className={this.getUserTabClassName()}
        >
          Users
        </button>
        <button
          onClick={this.handleTeamsTab}
          className={this.getTeamTabClassName()}
        >
          Teams
        </button>
        <button className="btn btn-danger list-group-item list-group-item-action list-group-item-danger text-center ">
          <a href="/" className="d-block text-danger">
            Logout
          </a>
        </button>
      </List-group>
    );
  }

  getUserTabClassName() {
    let className =
      "rounded-0 text-center list-group-item list-group-item-action ";
    if (this.state.showUsers) {
      className += "active";
    }
    return className;
  }

  getTeamTabClassName() {
    let className = "text-center list-group-item list-group-item-action ";
    if (!this.state.showUsers) {
      className += "active";
    }
    return className;
  }

  handleUsersTab = () => {
    this.setState({
      showUsers: true
    });
    this.props.handleClick("users");
  };

  handleTeamsTab = () => {
    this.setState({
      showUsers: false
    });
    this.props.handleClick("teams");
  };
}

export default LeftPanel;
