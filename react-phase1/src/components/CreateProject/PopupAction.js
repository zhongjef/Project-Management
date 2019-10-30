// var Button = ReactBootstrap.Button;
// var Modal = ReactBootstrap.Modal;

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreateProjectForm from './CreateProjectForm'
import React, { Component } from 'react'

export default class PopupAction extends Component {
    state = {showModal: false};
    getInitialState() {
        return { showModal: false };
      }
    
      close() {
        this.setState({ showModal: false });
      }
    
      open() {
        this.setState({ showModal: true });
      }
    
      render() {
        
        return (
          <div>
            <p>Click to get the full Modal experience!</p>
    
            <Button
              variant="primary"
              onClick={() => this.open()}
            >
              Create Your Own Project
            </Button>
    
            <Modal show={this.state.showModal} onHide={() => this.close()}>
              <Modal.Header closeButton>
                <Modal.Title>Create Your Project</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <CreateProjectForm />
    
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={() => this.close()}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
      }
}
