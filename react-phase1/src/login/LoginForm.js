import React from 'react';
import { Link } from 'react-router-dom';

/* The LoginForm Component */
class LoginForm extends React.Component {
	state = { targetUrl: "/login" }

  getRoute = () => {
    // Since the data are hardcoded, the confirming procedure will be card coded as well
    if (this.props.userName === this.props.userPassword) {
    	if (this.props.userName === "admin") {
      	return "/admin"
      } else {
      	return "/user/" + this.props.userName
      }
    } else {
      return "/login"
    }
  }

	render() {
		const targetUrl = this.getRoute()
		console.log(this.props.userName === "admin")
		console.log(targetUrl)
		return (
			<div>
				<div>
					<label> Your user name </label>
					<input name="userName"
								 value={ this.props.userName }
								 onChange={ this.props.handleChange }
								 type="text"
								 placeholder="User name"
					/>
				</div>
				<div>
					<label>Your password</label>
					<input name="userPassword"
								 value={ this.props.userPassword }
								 onChange={ this.props.handleChange }
								 type="password"
								 placeholder="******"
					/>
				</div>

				{/* Not yet implemented */}
				<div>
	          <label> <input type="checkbox"/> Save password </label>
	      </div>
	      <Link to={ targetUrl }>
					<button> Login </button>
				</Link>
			</div>
		);
	}
}

export default LoginForm;