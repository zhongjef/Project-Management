import React, { Component } from "react";
import LoginNavbar from "./components/Navbar/LoginNavbar";
import "bootstrap/dist/css/bootstrap.css";
import DisplayUserInfo from "./components/UserPage/DisplayUserInfo";
import DisplayProjects from "./components/UserPage/DisplayProjects";
import FooterNav from "./components/Navbar/FooterNav";
import data from "./components/UserPage/data.json";
import { getUserInfo} from "./actions/user"
// import "./UserPage.css";

// import "../HomePage/home.css";
class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: { userName: "Frank Hua", bio: "我要当海贼王！" },
      projects: {
        manageProjectList: [],
        contributeProjectList: []
      }
    };
  }

  componentWillMount(){
    const info = {
      userName: data.name,
      bio: data.description
    }
    const projectList = data.projects
    this.setState({
      userInfo: info,
      projects: projectList
    })

    getUserInfo().then((response) => {
      console.log(response.data)
    }
    
    )
    
  }


  render() {
    return (
      <div className="cotainer-fluid">
        <LoginNavbar />
        <DisplayUserInfo userInfo={this.state.userInfo} />
        <DisplayProjects projectList={this.state.projects} />
        <FooterNav />
      </div>
    );
  }
}
export default UserPage;
