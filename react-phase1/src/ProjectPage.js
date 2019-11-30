import React from "react";
import "./assets/css/projectPage.css";
import LoginNavbar from "./components/Navbar/LoginNavbar";
import { Button, Container, Row, Col } from "react-bootstrap";
import ProjectSection from "./components/ManageProjectPage/ProjectSection";
import Particles from "reactparticles.js";
import "./components/ManageProjectPage/css/projectPage.css";
class ProjectPage extends React.Component {
  state = {
    projectName: "CSC309 PHASE 1"
  };

  constructor(props) {
    super(props);
    this.state = {
  
    };

   
  }


  render() {
    return (
      <div className="mission-panel">
        <Particles id="tile1" />
        <LoginNavbar />

        <h1 className="mt-3 ml-3">{this.state.projectName}</h1>
        <Container>
          <ProjectSection />
        </Container>
      </div>
    );
  }
}

export default ProjectPage;
