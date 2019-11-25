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

    constructor(props) {
        super(props);
    }
    jump(location) {
        return function (e) {
            console.log(e)
            console.log(location)
            window.location = "/project"
        }
    }
    render() {
        return (
            <Flip>
                <div className="taskbar" onClick={this.jump("asd")}>
                    <Card project_name={this.props.project_name} managers={this.props.managers}/>
                </div>
            </Flip>
        );
    }
}

export default Taskcard;
