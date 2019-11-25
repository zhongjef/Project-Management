import React, { Component } from "react";
import LoginNavbar from "./components/Navbar/LoginNavbar";
import "bootstrap/dist/css/bootstrap.css";
import Taskcard from "./components/ManageProjectPage/Taskcard";
import DisplayUserInfo from "./components/UserPage/DisplayUserInfo";
import DisplayProjects from "./components/UserPage/DisplayProjects";
// import "./UserPage.css";

import "../HomePage/home.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: { userName: "Frank Hua", bio: "我要当海贼王！" },
      projectList: {
        manageProjectList: [
          {
            project_name: "UTOS",
            managers: ["Flla", "Silla"],
            tasks: 9,
            desc: "a project dedicated to developer community in UOFT"
          },
          {
            project_name: "Linkus",
            managers: ["Jin", "River"],
            tasks: 9,
            desc: "A project that allows students to find a assignment partner"
          },
          {
            project_name: "Linkus1",
            managers: ["Jin", "River"],
            tasks: 9,
            desc: "A project that allows students to find a assignment partner"
          },
          {
            project_name: "Linkus2",
            managers: ["Jin", "River"],
            tasks: 9,
            desc: "A project that allows students to find a assignment partner"
          },
          {
            project_name: "Linkus3",
            managers: ["Jin", "River"],
            tasks: 9,
            desc: "A project that allows students to find a assignment partner"
          }
        ],
        contributeProjectList: [
          {
            project_name: "CSC309",
            managers: ["Flla", "Silla"],
            tasks: 9,
            desc: "a project dedicated to developer community in UOFT"
          },
          {
            project_name: "CSC301A1",
            managers: ["Jin", "River"],
            tasks: 9,
            desc: "A project that allows students to find a assignment partner"
          }
        ]
      }
    };
  }

  render() {
    return (
      <div className="cotainer-fluid">
        <LoginNavbar />
        <DisplayUserInfo userInfo={this.state.userInfo} />
        <DisplayProjects projectList={this.state.projectList} />
      </div>
    );
  }
}
export default Home;
