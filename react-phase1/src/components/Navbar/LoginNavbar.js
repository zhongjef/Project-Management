import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './LoginNavbar.css';

export default function LoginNavbar() {
	return (
		<Navbar expand='lg navbar-dark bg-dark'>
			<Navbar.Brand href='#home'>我怎么那么帅</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto'>
					<NavDropdown title='Login' id='basic-nav-dropdown'>
						<NavDropdown.Item href='/signup'>Sign up</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link className='nav-item' href='/home'>
						Home
					</Nav.Link>
					<Nav.Link className='nav-item' href='/project'>
						Projects
					</Nav.Link>
					<Nav.Link className='nav-item' href='#link'>
						Notifications
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
