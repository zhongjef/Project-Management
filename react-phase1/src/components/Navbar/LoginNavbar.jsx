import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import profilePicture from '../../assets/img/profilepic.png';

import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './LoginNavbar.css';

class LoginNavbar extends Component {
	state = {
		user: {
			profilePic: profilePicture
		}
	};
	render() {
		return (
			<Navbar expand='lg navbar-dark bg-dark'>
				<Navbar.Brand href='/home'>我怎么那么帅</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link className='nav-item' href='/home'>
							Home
						</Nav.Link>
						<Nav.Link className='nav-item' href='/project'>
							Projects
						</Nav.Link>
					</Nav>
					<Nav>
						{/* {this.getAccount()} */}
						<Nav.Link className='nav-item ' href='/account'>
							<img
								className='rounded'
								style={{ width: 25 }}
								alt='Profile Picture'
								src={this.state.user.profilePic}
							/>
						</Nav.Link>
						<NavDropdown title='Login' id='basic-nav-dropdown'>
							<NavDropdown.Item href='/signup'>Sign up</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link className='nav-item' href='#link'>
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
				<Nav.Link className='nav-item ' href='/account'>
					<img
						className='rounded'
						style={{ width: 25 }}
						alt='Profile Picture'
						src={this.state.user.profilePic}
					/>
				</Nav.Link>
			);
		} else
			return (
				<NavDropdown title='Login' id='basic-nav-dropdown'>
					<NavDropdown.Item href='/signup'>Sign up</NavDropdown.Item>
				</NavDropdown>
			);
	};

	// return ()
}

export default LoginNavbar;
