import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class TopNav extends Component {
  state = {};
  render() {
    return (
      <Nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Panel Board
        </a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown ">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Noticification
            </a>
          </li>
        </ul>
      </Nav>
    );
  }
}

export default TopNav;
