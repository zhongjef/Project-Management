// var Button = ReactBootstrap.Button;
// var Modal = ReactBootstrap.Modal;

import Modal from "react-bootstrap/Modal";
import React, { Component } from "react";
import {Button} from "react-bootstrap";
import {FaQuestion} from 'react-icons/fa'

export default class InstructionPage extends Component {
  constructor (props) {
    super();

    this.state = {
      showModal: false
    };
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

  onCreateTask() {
    // this.setState({newTaskCreated: true})
    this.close();
  }

  render() {
    return (
      <div >
        <Button variant="primary float-right" size="sm" onClick={() => this.open()}>
          <FaQuestion/>
        </Button>
        <Modal show={this.state.showModal} onHide={() => this.close()}>
          <Modal.Header closeButton>
            <Modal.Title>Instruction to our Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>

              <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.close()}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
