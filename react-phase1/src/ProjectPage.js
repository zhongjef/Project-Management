import React from "react"
import "./assets/css/projectPage.css"
import {ButtonToolbar} from "react-bootstrap"
import Navbar from "./components/Projects/TopNav";
class ProjectPage extends React.Component {
    render() {
        return (
            <div className="mission-panel">
                <Navbar />
                <ButtonToolbar>
                </ButtonToolbar>
            </div>
        );
    }
}

export default ProjectPage;