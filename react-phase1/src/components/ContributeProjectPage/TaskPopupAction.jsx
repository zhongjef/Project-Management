// var Button = ReactBootstrap.Button;
// var Modal = ReactBootstrap.Modal;

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TaskProcess from "./TaskProcess";
import React, { Component } from "react";

export default class TaskPopupAction extends Component {
  state = { showModal: false };
  constructor(props) {
    super(props);
    this.state = {
      completed: this.props.completed
    };
    this.submitCompletionHandler = this.submitCompletionHandler.bind(this);
  }
  getInitialState() {
    return { showModal: false };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  submitCompletionHandler(completedTasks){
      console.log(completedTasks)
      this.close()
      
  }

  render() {
    return (
      <div>
        <Button variant="primary" onClick={() => this.open()}>
          Complete Task
        </Button>

        <Modal show={this.state.showModal} onHide={() => this.close()}>
          <Modal.Header closeButton>
            <Modal.Title>Create New Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TaskProcess completed={this.state.completed} submitCompletion={this.submitCompletionHandler}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.close()}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
