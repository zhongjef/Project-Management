import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { createProject } from "../../actions/project";

export default class CreateProjectForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
        managers: [],
        teams: []
    }
  }
  addManager(managerName) {
    this.state.managers.push(managerName);
    this.setState({ managers: this.state.managers });
  }

  deleteManager(index) {
    this.state.managers.splice(index, 1);
    this.setState({ managers: this.state.managers });
  }
  
  addTeam(teamName){
      this.state.teams.push(teamName);
      this.setState({ teams: this.state.teams });
      console.log(this.state)
      console.log({
              project_name: this.state.project_name,
              managers: this.state.managers,
              teams: this.state.teams
            })
  }
  deleteTeam(index){
      this.state.teams.splice(index, 1);
      this.setState({ teams: this.state.teams });
  }

  displayTeam(){
      return(
        <div className="container">
            <ul className="list-group text-center mt-2">
              {this.state.teams.map((team, index) => {
                  return (
                    <Row className="show-grid" key={index}>
                      <Col xs={8} md={10}>
                        <li className="list-group-item">
                          {team}
                        </li>
                      </Col>
                      <Col xs={4} md={2}>
                        <Button
                          className=""
                          variant="danger"
                          size="sm"
                          onClick={() => this.deleteTeam(index)}
                        >
                          Delete!
                        </Button>
                      </Col>
                    </Row>
                  );
                }       
              )}
            </ul>
          </div>
      )
  }

  displayManagers(){
    return(
      <div className="container">
          <ul className="list-group text-center mt-2">
            {this.state.managers.map((manager, index) => {
                return (
                  <Row className="show-grid" key={index}>
                    <Col xs={8} md={10}>
                      <li className="list-group-item">
                        {manager}
                      </li>
                    </Col>
                    <Col xs={4} md={2}>
                      <Button
                        className=""
                        variant="danger"
                        size="sm"
                        onClick={() => this.deleteManager(index)}
                      >
                        Delete!
                      </Button>
                    </Col>
                  </Row>
                );
              }       
            )}
          </ul>
        </div>
    )
}



  render() {
    return (
      <Form>
        <Form.Label>Project Name</Form.Label>
        <Form.Control
          type="project-name"
          placeholder="Enter project name"
          name="projectName"
          onChange={e => this.setState({ project_name: e.target.value })}
        />

        <Container>
          <Row className="show-grid" id="managerForm">
            <Col xs={12} md={10}>
              <Form.Label className="" id="manager-group">
                Create Teams
              </Form.Label>
              <Form.Control
                id="team-input"
                type="teamName"
                placeholder="Enter team name"
              />
            </Col>
            <Col xs={6} md={2}>
              <Button
                className="mt-2"
                variant="outline-info"
                size="sm"
                onClick={() =>
                  this.addTeam(document.getElementById("team-input").value)
                }
              >
                Add More!
              </Button>
            </Col>
          </Row>
          {this.displayTeam()}
        </Container>

        <Container>
          <Row className="show-grid" id="managerForm">
            <Col xs={12} md={10}>
              <Form.Label className="" id="manager-group">
                Invite Managers
              </Form.Label>
              <Form.Control
                id="manager-input"
                type="manager"
                placeholder="Enter his/her id"
              />
            </Col>
            <Col xs={6} md={2}>
              <Button
                className="mt-2"
                variant="outline-info"
                size="sm"
                onClick={() =>
                  this.addManager(
                    document.getElementById("manager-input").value
                  )
                }
              >
                Add More!
              </Button>
            </Col>
          </Row>
          {this.displayManagers()}
        </Container>

        <Button
          className="mt-3"
          variant="primary"
          type="submit"
          onClick={() => createProject(
            {
              project_name: this.state.project_name,
              managers: this.state.managers,
              teams: this.state.teams
            }
          )}
        >
          Create!
        </Button>
      </Form>
    );
  }
}
