import React, { Component } from 'react'
import TaskCard from "./TaskCard";

export default class ContributeProjectPage extends Component {
    render() {
        return (
            <div>
                <TaskCard completed={3}/>
            </div>
        )
    }
}
