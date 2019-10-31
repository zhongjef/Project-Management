import React, { Component } from 'react'
import ReactDOM from "react-dom";
import {Form, Button,Container, Row, Col} from 'react-bootstrap';

export default class CreateProjectForm extends Component {
    state = {
        manager : {
            'manager-1' : 'Kch3coo',
          }
    };
    
    addManager(manager) {
        //create a unike key for each new fruit item
        var timestamp = (new Date()).getTime();
        // update the state object
        this.state.manager['manager-' + timestamp] = manager;
        // set the state
        this.setState({ manager : this.state.manager });
       };
    
    deleteManager(key) {
        let managers = this.state.manager;
        // managers.pop(key);
        delete this.state.manager[key]
        console.log(key)
        this.setState({manager : this.state.manager});
        
    }
    handlePasswordChange(e) {
        this.setState({new: e.target.value});
     }

    render() {
        return (
            <Form>

                <Form.Label>Project Name</Form.Label>
                <Form.Control type="project-name" placeholder="Enter project name" />

                <Form.Group className="mt-2" controlId="exampleForm.ControlSelect1">
                    <Form.Label>Number of Teams</Form.Label>
                    <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>

                <Container>

            <Row className="show-grid" id="managerForm">
                <Col xs={12} md={10}>
                    <Form.Label className="" id="manager-group">Invite Managers</Form.Label>
                    <Form.Control id="manager-input" type="manager" placeholder="Enter his/her id" />
                </Col>
                <Col xs={6} md={2}>
                    <Button className="mt-2" variant="outline-info" size="sm" onClick={() => this.addManager(document.getElementById("manager-input").value)}>
                        Add More!
                    </Button>
                </Col>
            </Row>

            <div className="container">
            
              <ul className="list-group text-center mt-2">
              {
                  Object.keys(this.state.manager).map(function(key) {
                    return (<Row className="show-grid" key={key}>
                                <Col xs={12} md={10}>
                                <li className="list-group-item">{this.state.manager[key]}</li>
                                </Col>
                                <Col xs={6} md={2}>
                                    <Button className="" variant="danger" size="sm" onClick={()=> this.deleteManager(key)}>
                                        Delete!
                                    </Button>
                                </Col>
                            </Row>
                        )
                  }.bind(this))
                }
                
              </ul>
             </div>

        </Container>

                <Button className="mt-3" variant="primary" type="submit">
                    Create!
                </Button>
            </Form>
        )
    }
}
