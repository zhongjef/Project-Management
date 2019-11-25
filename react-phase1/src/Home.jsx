import React, { Component } from "react";
import LoginNavbar from "./components/Navbar/LoginNavbar";
import LeftNav from "./components/HomePage/LeftNav";
import "bootstrap/dist/css/bootstrap.css";
import Sidebar from "react-sidebar";
import Particles from "reactparticles.js";
import Taskcard from "./components/ManageProjectPage/Taskcard";
import "./components/HomePage/home.css"
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.tasks = []
    this.managers = {}
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    // call fetchCard here after implementing our database and server
  }

  /**
   * The api to fetch data from the server (other procedures has been wrapped into the components
   * callback takes an object
   * 
   * Use Promise to resolve the function
   */
  fetchCard(url, callback, id, password) {
    // get the projects card from the database
    // code below requries server call
    // in "Promise then, call this function"
    let managers = {}; // managers are got thorugh the database, resolved in the promise object
    let project_name = ""; // project the same as well above
    this.tasks.push(<Taskcard project_name={project_name} managers={managers}/>)
  }
  /**
   * The api to update data from the server
   * callback to show if it's successful
   */
  updateCard(url, callback, managers, project_name) {
    // get the managers in the updating procedure
    // get the project_name in the updating procedure
    // code to update the database
  }

  roar(popup, project_name, managers) {
    let self = this;
    return function (e) {
      e.preventDefault();
      console.log("roar!");
      popup.close();
      console.log(managers);
      self.tasks.push(<Taskcard project_name={project_name} managers={managers}/>);
    }
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  render() {
    
    return (
      <div className="cotainer-fluid">
        {/* <Particles id="tile1" /> */}
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
