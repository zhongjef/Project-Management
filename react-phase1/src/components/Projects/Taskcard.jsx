import React from "react"
import "./css/taskcard.css"
import Flip from "react-reveal/Flip"
class Taskcard extends React.Component {
    render() {
        return (
            <Flip>
                <div className="taskbar">
                    <header><h1>Task1</h1></header>
                </div>
                <div className="taskbar"></div>
                <div className="taskbar"></div>
            </Flip>
        );
    }
}

export default Taskcard;
