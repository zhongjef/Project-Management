import React, { Component } from 'react';
import LoginNavbar from './components/Navbar/LoginNavbar';
import LeftNav from './components/HomePage/LeftNav';
import 'bootstrap/dist/css/bootstrap.css';
import PopupAction from './components/CreateProject/PopupAction';
import Sidebar from "react-sidebar";
import Particles from "reactparticles.js";
import Taskcard from "./components/ProjectsPage/Taskcard"
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sidebarOpen: true
		};

		this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
	}

	onSetSidebarOpen(open) {
		this.setState({ sidebarOpen: open });
	}
	render() {
		return (
			<div>
				<container className='cotainer-fluid'>
					<Particles id='tile1' />
					<LoginNavbar />
					<Sidebar
						sidebar={<LeftNav/>}
						open={this.state.sidebarOpen}
						onSetOpen={this.onSetSidebarOpen}
						styles={{
							sidebar: {
								zIndex: 2,
								position: "absolute",
								top: 50,
								bottom: 0,
								transition: "transform .3s ease-out",
								WebkitTransition: "-webkit-transform .3s ease-out",
								willChange: "transform",
								overflowY: "auto"
							}
						}}
					>
					<button onClick={() => this.onSetSidebarOpen(true)} className="sidebar-button">
							==
                	</button>
					</Sidebar>
					<Taskcard/>
					<Taskcard />
					<Taskcard />
					<Taskcard />
					<Taskcard />
					<Taskcard />
					<Taskcard />
					<Taskcard />
				</container>

			</div>
		);
	}
}
export default Home;
