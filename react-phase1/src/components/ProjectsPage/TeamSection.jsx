import React, { Component } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import { applyDrag, } from '../../utils/Drag';
import { Button, Row, Col, Card, ListGroup} from 'react-bootstrap';

export default class TeamSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamName: "",
      currTeam: [],

      allTeam: [
        {
          id: 123456,
          name: "John",
          teamName: "Master of html",
          tasks: [{ taskid: 1, taskName: "John Task 1" }]
        },
        {
          id: 13352,
          name: "Silvia",
          teamName: "Master of html",
          tasks: [{ taskid: 2, taskName: "Silvia Task 1" }]
        },
        {
          id: 9399018,
          name: "Bob",
          teamName: "Master of html",
          tasks: [
            { taskid: 3, taskName: "Bob Task 1" },
            { taskid: 4, taskName: "Bob Task 2" }
          ]
        },
        {
            id: 55156,
            name: "Kidnnedy",
            teamName: "Master of css",
            tasks: [
              { taskid: 5, taskName: "Kidnnedy Task 1" },
              { taskid: 6, taskName: "Kidnnedy Task 2" }
            ]
          },
          {
            id: 512466,
            name: "Jason",
            teamName: "Master of java",
            tasks: [
              { taskid: 5, taskName: "Jason Task 1" },
              { taskid: 6, taskName: "Jason Task 2" }
            ]
          }
      ]
    };
  }

  handleTeamChange(team) {
    
    const currTeam = [];
    for(let i = 0; i < this.state.allTeam.length; i++){
        const member = this.state.allTeam[i]
        if(member.teamName === team){
            currTeam.push(member);
        }
    }

    this.setState({
        teamName: team,
        currTeam: currTeam
      });
    console.log(currTeam)
  }

  onTaskDrop(e, index){
    
    const member = Object.assign({}, this.state.currTeam[index]);
    member.tasks = applyDrag(member.tasks, e);
    this.state.currTeam[index] = member;
    this.setState({
      currTeam: this.state.currTeam
    });
    console.log(member)
  }

  getTaskPayload(taskIndex, memberIndex) {
    return this.state.currTeam[memberIndex].tasks[taskIndex]
  }

  render() {
    return (
      <div>
        <Container>
        <Row> 
          {this.state.currTeam.map((member, index) => {
            return (

                <Col key={member.id}>
                <Card style={{ width: "18rem" }}>
                <Card.Title>{member.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Current Task</Card.Subtitle>

                <Container groupName={"taskTable"} onDrop={e => this.onTaskDrop(e, index)} 
                getChildPayload={taskIndex =>
                      this.getTaskPayload(taskIndex, index)
                    }>
                
                    {member.tasks.map(task => { return (
                    <Draggable key={task.taskid}>
                        <Button className="draggable-item mt-2" key={task.taskid}>{task.taskName}</Button>
                    </Draggable>);}
                    )}

                  </Container>
                </Card>
              </Col>
            
              
            );
          })}
        </Row>
        </Container>
      </div>
    );
  }
}
