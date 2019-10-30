import React from "react"
import "./assets/css/projectPage.css"
import {ButtonToolbar} from "react-bootstrap"
import Fade from "react-reveal/Fade"
import Navbar from "./components/Projects/TopNav";
import Taskbar from "./components/Projects/Taskcard";
import Taskcard from "./components/Projects/Taskcard";
class ProjectPage extends React.Component {
    render() {
        return (
            <div className="mission-panel">
                <Navbar />
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