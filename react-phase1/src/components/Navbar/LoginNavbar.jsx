import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import "./LoginNavbar.css";

class LoginNavbar extends Component {
  state = {
    user: this.props.user
  };
  render() {
    return (
      <Navbar expand="lg navbar-dark bg-dark">
        <Navbar.Brand href="#home">我怎么那么帅</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="nav-item" href="/home">
              Home
            </Nav.Link>
            <Nav.Link className="nav-item" href="/project">
              Projects
            </Nav.Link>
          </Nav>
          <Nav>
            {this.getAccount()}
            <Nav.Link className="nav-item" href="#link">
              Notifications
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

  getAccount = () => {
    if (this.state.user) {
      return (
        <Nav.Link className="nav-item " href="/account">
          <img
            className="rounded"
            style={{ width: 25 }}
            alt="Profile Picture"
            src={this.state.user.profilePic}
          ></img>
        </Nav.Link>
      );
    } else
      return (
        <NavDropdown title="Login" id="basic-nav-dropdown">
          <NavDropdown.Item href="/signup">Sign up</NavDropdown.Item>
        </NavDropdown>
      );
  };
}

export default LoginNavbar;
