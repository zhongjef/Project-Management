import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import LoginNavbar from "./components/Navbar/LoginNavbar";
import LoginForm from "./components/LoginForm";
import { Helmet } from "react-helmet";

import Particles from "reactparticles.js";
class Login extends React.Component {
  state = {
    userName: "",
    lastUserName: "",
    userPassword: "",
    lastP: "",
    profilePic: undefined,
    targetUrl: "/" // set '/' as place holder; if user name and password invalid
    // or does not match go back to the current login page
  };
  // From Queue.js
  // Generic handler for whenever we type in an input box.
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    // log(name)

    // 'this' is bound to the component in this arrow function.
    this.setState({
      [name]: value // [name] sets the object property name to the value of the 'name' variable.
    });
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Login Page</title>
          <meta name="Login Page" />
        </Helmet>
        <div>
          <Particles id="tile1" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
          <LoginNavbar user={{ profilePic: this.state.profilePic }} />
          <LoginForm
            userName={this.state.userName}
            userPassword={this.state.userPassword}
            handleChange={this.handleInputChange}
            handleUserChange={this.props.handleUserChange}
          />
        </div>
      </div>
    );
  }
  handleUserChange = () => {
    this.setState({
      profilePic:
        "https://imgix.ranker.com/user_node_img/50054/1001066706/original/the-mortiest-morty-is-very-special-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces"
    });
    this.props.handleUserChange();
  };
}

export default Login;
