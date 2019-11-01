import React from "react";
import "./assets/css/projectPage.css";
import LoginNav from './components/Navbar/LoginNavbar';
import { Button, Container, Row, Col} from 'react-bootstrap';
import ProjectSection from "./components/ProjectsPage/ProjectSection";
import Taskbar from "./components/ProjectsPage/Taskcard";
import Taskcard from "./components/ProjectsPage/Taskcard";
import Particles from 'reactparticles.js';
import Sidebar from "react-sidebar";
import "./components/ProjectsPage/css/projectPage.css"
import { relative } from "path";

class ProjectPage extends React.Component {
    state = {
        projectName : "CSC309 PHASE 1"
    }

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
            <div className="mission-panel">
                <Particles id='tile1' />
                <LoginNav />
                


                {/* <Sidebar
                    sidebar={<b>Side bar</b>}
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
                        }}}
                >
                <button onClick={() => this.onSetSidebarOpen(true)} className="sidebar-button">
                    ==
                </button>
                </Sidebar> */}

                <h1 className="mt-3 ml-3">{this.state.projectName}</h1>
                <Container>

                    <ProjectSection />
                </Container>
{/*                 
                <Taskcard/>
                <Taskcard/> */}
                
            </div>
        );
    }
}

export default ProjectPage;