import React from "react"
import "./css/taskcard.css"
import Flip from "react-reveal/Flip"
import Card from "./card"
class Taskcard extends React.Component {
    /**
     * process the url and fetch the data
     */
    initializeData(url) {
        console.log(url)
    }
    jump(location) {
        return function (e) {
            console.log(e)
            console.log(location)
            window.location = "/"
        }
    }
    render() {
        return (
            <Flip>
                <div className="taskbar" onClick={this.jump("asd")}>
                    <Card/>
                </div>
                <div className="taskbar"></div>
                <div className="taskbar"></div>
            </Flip>
        );
    }
}

export default Taskcard;
