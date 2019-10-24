/*  Full LogIn component */
// Everything here was previously in the App component.
import React from 'react';

// Importing components
import LoginForm from './LoginForm';

const log = console.log

class Login extends React.Component {
  state = {
    userName: "",
    userPassword: "",
    targetUrl: "/login"
  }

  // From Queue.js
  // Generic handler for whenever we type in an input box.
  handleInputChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name
    
    // log(name)

    // 'this' is bound to the component in this arrow function.
    this.setState({
      [name]: value  // [name] sets the object property name to the value of the 'name' variable.
    })
  }

  render() {
    return (
      <div className="App">
          
        { /* Header component with text props. */ }
        <div>Login</div>

        { /* Student Form component with text and function props. */ }
        <LoginForm 
              userName={ this.state.userName }
              userPassword={ this.state.userPassword }
              handleChange={ this.handleInputChange }
       />
      </div>
    );
  }
}

export default Login;