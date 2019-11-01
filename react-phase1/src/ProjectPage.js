import React from "react"
import "./assets/css/projectPage.css"
import {ButtonToolbar} from "react-bootstrap"
import Fade from "react-reveal/Fade"
import TopNav from './components/Navbar/TopNav';
import Taskbar from "./components/ProjectsPage/Taskcard";
import Taskcard from "./components/ProjectsPage/Taskcard";
class ProjectPage extends React.Component {
    render() {
        return (
            <div className="mission-panel">
                <TopNav />
                <Fade left>
                    <h1>stretching projects...</h1>
                </Fade>
                <Taskcard/>
                <ButtonToolbar>
                </ButtonToolbar>
            </div>
        );
    }
}

export default ProjectPage;