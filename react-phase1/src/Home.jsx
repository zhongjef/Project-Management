import React, { Component } from 'react';
import LoginNavbar from './components/Navbar/LoginNavbar';
import LeftNav from './components/HomePage/LeftNav';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import PopupAction from './components/CreateProject/PopupAction';
import ListGroup from 'react-bootstrap/ListGroup';
import TasksBoard from './components/HomePage/TasksBoard';

class Home extends Component {
	state = {};
	render() {
		return (
			<div>
				<div className='container-fluid p-0'>
					<LoginNavbar />
					<div class='row'>
						<div class='col-md-0'>
							<LeftNav />
						</div>
						<div className='col-md-9'>
							<TasksBoard />
						</div>
					</div>
				</div>
				<PopupAction />
			</div>
		);
	}
}
export default Home;
