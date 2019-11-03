import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/login.css';
import Logo from '../assets/img/logo.png';
import Particles from 'reactparticles.js';

import LoginNavbar from '../components/Navbar/LoginNavbar';

/* The LoginForm Component */
class LoginForm extends React.Component {
	state = { targetUrl: "/" }

  getRoute = () => {
    // Since the data are hardcoded, the confirming procedure will be card coded as well
    if (this.props.userName === this.props.userPassword) {
    	if (this.props.userName === "admin") {
      	return "/admin"
      } else {
      	//return "/account/" + this.props.userName
      	return "/home"
      }
    } else {
      return "/"
    }
  }

	render() {
		const targetUrl = this.getRoute()
		return (
			<div className='myLogin'>
				<Particles id='tile1' />
				<link
					rel='stylesheet'
					href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
					integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm'
					crossorigin='anonymous'
				/>
				<title> csc309 Phase 1</title>
				<header class='header-sticky header-light'>
					{/* using login Navbar component */}
					<LoginNavbar />
				</header>

				<div id='login-holder' class='container'>
					<div class='card'>
						<article class='card-body'>
							<a href='src/pages/signup/signup.html' class='float-right btn btn-outline-primary'>
								Sign up
							</a>
							<h4 class='card-title mb-4 mt-1'>Sign in</h4>
							<form>
								<div class='form-group'>
									<label>Your email or account name</label>
									<input name='userName'
												 class='form-control'
												 placeholder='Email or account name'
												 type='text'
												 value={ this.props.userName }
												 onChange={ this.props.handleChange }
									/>
								</div>
								<div class='form-group'>
									<a class='float-right' href='/'>
										Forgot?
									</a>
									<label>Your password</label>
									<input name='userPassword'
												 class='form-control'
												 placeholder='******'
												 type='password'
												 value={ this.props.userPassword }
												 onChange={ this.props.handleChange }
									/>
								</div>
								<div class='form-group'>
									<div class='checkbox'>
										<label>
											{' '}
											<input type='checkbox' /> Save password{' '}
										</label>
									</div>
								</div>
								<div class='form-group'>
									<Link to={ targetUrl }>
										{ 'button will be set to type submit later' }
										<button class='btn btn-primary btn-block'> Login </button>
									</Link>
								</div>
							</form>
						</article>
					</div>
				</div>
				<script
					src='https://code.jquery.com/jquery-3.2.1.slim.min.js'
					integrity='sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN'
					crossorigin='anonymous'
				/>
				<script
					src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js'
					integrity='sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q'
					crossorigin='anonymous'
				/>
				<script
					src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'
					integrity='sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl'
					crossorigin='anonymous'
				/>
			</div>
		);
	}
}

export default LoginForm; 