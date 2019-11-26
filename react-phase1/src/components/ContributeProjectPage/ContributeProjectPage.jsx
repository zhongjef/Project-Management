import React, { Component } from "react";
import { Table } from "react-bootstrap";
import TaskPopupAction from "./TaskPopupAction";
import "./ContributeProject.css";
import LoginNavbar from "../Navbar/LoginNavbar";

export default class ContributeProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectId: "asdf3asrdfg30a",
      projectName: "Utos",
      teamName: "Fantastic Frontend team",
      tasks: [
        {
          taskId: 1,
          taskDesc: "CSC309 TA meeting",
          taskProcess: 0
        },
        {
          taskId: 2,
          taskDesc: "CSC309 FrontEnd Dev",
          taskProcess: 2
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <LoginNavbar />
        <div className="p-5">
          <div className="info">
            <div className="date">
              <p id="day">
                <span id="today">{this.state.projectName}: </span>
                <span id="daymonth"> {this.state.teamName}</span>
              </p>
              <p id="month">Total task: {this.state.tasks.length} </p>
            </div>
          </div>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Completetion</th>
                <th>Task</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tasks.map((task, index) => {
                return (
                  <tr key={index}>
                    <td>{task.taskProcess}/6</td>
                    <td>{task.taskDesc}</td>
                    <td>
                      <TaskPopupAction completed={task.taskProcess} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
