import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import LoginForm from "./components/LoginForm";
import { Helmet } from "react-helmet";

class Login extends React.Component {
  state = {
    userName: "", lastUserName: "",
    userPassword: "", lastP: "",
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
<<<<<<< HEAD
      <div className="App">
=======
      <div>
        <Helmet>
          <title>Login Page</title>
          <meta name="Login Page" />
        </Helmet>

>>>>>>> refs/remotes/origin/master
        {/* Login Form component with user name and password props. */}
        <LoginForm
          userName={this.state.userName}
          userPassword={this.state.userPassword}
          handleChange={this.handleInputChange}
          handleUserChange={this.props.handleUserChange}
        />
      </div>
    );
  }
}

export default Login;
