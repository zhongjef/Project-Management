import React from "react"
import "./assets/css/projectPage.css"
import {ButtonToolbar} from "react-bootstrap"
import Fade from "react-reveal/Fade"
import TopNav from './components/Navbar/TopNav';
import Taskbar from "./components/ProjectsPage/Taskcard";
import Taskcard from "./components/ProjectsPage/Taskcard";
import Particles from 'reactparticles.js';

class ProjectPage extends React.Component {
    render() {
        return (
            <div className="mission-panel">
                <Particles id='tile1' />
                <TopNav />
                <Taskcard/>
                <Taskcard/>
                
            </div>
        );
    }
}

export default ProjectPage;