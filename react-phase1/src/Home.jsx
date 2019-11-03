import React, { Component } from "react";
import LoginNavbar from "./components/Navbar/LoginNavbar";
import LeftNav from "./components/HomePage/LeftNav";
import "bootstrap/dist/css/bootstrap.css";
import Sidebar from "react-sidebar";
import Particles from "reactparticles.js";
import TasksBoard from "./components/HomePage/TasksBoard";
import Taskcard from "./components/ProjectsPage/Taskcard";
import "./components/HomePage/home.css"
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.tasks = []
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  roar(popup, project_name) {
    let self = this;
    return function (e) {
      e.preventDefault();
      console.log("roar!");
      console.log(e.target);
      popup.close();
      console.log(project_name);
      self.tasks.push(<Taskcard project_name={project_name}/>);
    }
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  render() {
    
    return (
      <div className="cotainer-fluid">
        <Particles id="tile1" />
        <Sidebar
          sidebar={<LeftNav global={this}/>}
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
          <button
            onClick={() => this.onSetSidebarOpen(true)}
            className="sidebar-button"
          ></button>
        </Sidebar>
        <LoginNavbar />
        <div id = "card_spawn"className="container-fluid">
          {this.tasks}
        </div>
      </div>
    );
  }
}
export default Home;
