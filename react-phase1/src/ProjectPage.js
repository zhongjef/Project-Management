import React from "react"
import "./assets/css/projectPage.css"
import {ButtonToolbar} from "react-bootstrap"
import Fade from "react-reveal/Fade"
import TopNav from './components/Navbar/TopNav';
import Taskbar from "./components/ProjectsPage/Taskcard";
import Taskcard from "./components/ProjectsPage/Taskcard";
import Particles from 'reactparticles.js';
import Sidebar from "react-sidebar";
import "./components/ProjectsPage/css/projectPage.css"
import { relative } from "path";
import LeftNav from "./components/HomePage/LeftNav"
class ProjectPage extends React.Component {

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
                <Sidebar
                    sidebar={<LeftNav/>}
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
                <button onClick={() => this.onSetSidebarOpen(true)} className="sidebar-button">
                        ==
                </button>
                </Sidebar>
                <Particles id='tile1' />
                <TopNav />

                
                <Taskcard/>
                <Taskcard/>
                
            </div>
        );
    }
}

export default ProjectPage;