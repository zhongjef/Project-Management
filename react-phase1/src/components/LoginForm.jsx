import React from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import "../assets/css/login.css";
import Logo from "../assets/img/logo.png";
import Particles from "reactparticles.js";

import LoginNavbar from "./Navbar/LoginNavbar";

/* The LoginForm Component */
class LoginForm extends React.Component {
  state = { targetUrl: "/" };

  getRoute = () => {
    // Since the data are hardcoded, the confirming procedure will be card coded as well
    if (this.props.userName === this.props.userPassword) {
      if (this.props.userName === "admin") {
        return "/admin";
      } else if (this.props.userName === "user") {
        //return "/account/" + this.props.userName
        return "/home";
      } else {
        return "/";
      }
    } else {
      return "/";
    }
  };

  changeCurrentUser = () => {
    this.props.handleUserChange(this.props.userName);
  }

  render() {
    if (this.state.targetUrl != "/") {
      this.changeCurrentUser();
      return(<Redirect to={ this.state.targetUrl } />)
    }
    return (
      <div className="myLogin">
        <Particles id="tile1" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
        <title> csc309 Phase 1</title>
        <header className="header-sticky header-light">
          {/* using login Navbar component */}
          <LoginNavbar />
        </header>

        <div id="login-holder" className="container">
          <div className="card">
            <article className="card-body">
              <a
                href="/signup"
                className="float-right btn btn-outline-primary"
              >
                Sign up
              </a>
              <h4 className="card-title mb-4 mt-1">Sign in</h4>
              <form>
                <div className="form-group">
                  <label>Your email or account name</label>
                  <input
                    name="userName"
                    className="form-control"
                    placeholder="Email or account name"
                    type="text"
                    value={this.props.userName}
                    onChange={this.props.handleChange}
                  />
                </div>
                <div className="form-group">
                  <a className="float-right" href="/">
                    Forgot?
                  </a>
                  <label>Your password</label>
                  <input
                    name="userPassword"
                    className="form-control"
                    placeholder="******"
                    type="password"
                    value={this.props.userPassword}
                    onChange={this.props.handleChange}
                  />
                </div>
                <div className="form-group">
                  <div className="checkbox">
                    <label>
                      {" "}
                      <input type="checkbox" /> Save password{" "}
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <button className="btn btn-primary btn-block"
                          onClick={() => {
                            this.setState({["targetUrl"]: this.getRoute()
                          })}}>
                    {" "}
                    Login{" "}
                  </button>
                </div>
              </form>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
