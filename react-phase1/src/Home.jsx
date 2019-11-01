import React, { Component } from 'react';
import LoginNavbar from './components/Navbar/LoginNavbar';
import LeftNav from './components/HomePage/LeftNav';
import 'bootstrap/dist/css/bootstrap.css';
import PopupAction from './components/CreateProject/PopupAction';

import TasksBoard from './components/HomePage/TasksBoard';

class Home extends Component {
	state = {};
	render() {
		return (
			<div>
				<container className='cotainer-fluid'>
					<LoginNavbar />
					<container className='row'>
						<container className='col-md-auto'>
							<LeftNav />
						</container>
						<container className='col '>
							<TasksBoard />
						</container>
					</container>
				</container>

				<PopupAction />
			</div>
		);
	}
}
export default Home;
