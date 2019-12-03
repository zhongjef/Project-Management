import React, { Component } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import { applyDrag } from "../../utils/Drag";
import { Button, Row, Col, Card, ListGroup } from "react-bootstrap";
import { FaPlusSquare } from "react-icons/fa";
import InviteMember from "./CreateForms/InviteMember"
import {assignTaskToContributor, getTeam} from "../../actions/project";
export default class TeamSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamName: "",
      currTeam: [],
      contributors: [],
      allTeam: this.props.teams
    };
    
  }

  // componentWillMount(){
  //   const init_team = this.props.teams[0]
  //   this.setState({
  //     teamName: init_team.name,
  //     currTeam: init_team.contributors
  //   })
  // }

  handleTeamChange(team) {
    console.log(this.props.teams)
    const currTeam = this.props.teams.filter(t => t.name === team)[0];
  
    this.setState({
      teamName: currTeam.name,
      currTeam: currTeam,
      contributors: currTeam.contributors,
    });
    console.log(currTeam);
  }

  onTaskDrop(e, index) {
    console.log(this.state.currTeam)
    const currTeam = this.state.currTeam;
    const member = Object.assign({}, this.state.contributors[index]);
    console.log(member)
    member.taskList = applyDrag(member.taskList, e);
    this.state.contributors[index] = member;
    member.taskList.append(e.payload.id);
    const data = {
      taskList:  member.taskList,
      name: member.userName
    }
    assignTaskToContributor(currTeam._id, member.userId, data).then((e) => {
      console.log(e);
    })
    // addTaskContributor(e.payload.id, currTeam._id)
    this.setState({
      currTeam: this.state.currTeam
    });
    // console.log(member);
    // console.log(e)
  }

  getTaskPayload(taskIndex, memberIndex) {
    return this.state.contributors[memberIndex].taskList[taskIndex];
  }

  addMemberHandler(member){
    //call data base 
  }


  render() {
    return (
      <div style={{minWidth: '700rpx'}}>
        <Container>
            <Card>
              <Card.Header>
                Team Section
                <div className="float-right">
                <InviteMember teamName={this.state.teamName} teamSize={this.state.contributors.length} addMember={this.addMemberHandler.bind(this)}/>
                </div>
                
              </Card.Header>
              <Card.Body>
                <Card.Title>{this.state.teamName}</Card.Title>
                <Row>

                {this.state.contributors.map((member, index) => {
                  return (
                    <Col md={4} xs={6} className="p-2" key={member.userId}>
                      <Card style={{ width: "18rem", alignContent: "center"}}>
                        <Card.Header><h3>{member.userName}</h3></Card.Header>
                        <Card.Subtitle className="d-flex justify-content-center text-muted mt-2">
                          Current Tasks
                        </Card.Subtitle>

                        <Container
                          groupName={"taskTable"}
                          onDrop={e => this.onTaskDrop(e, index)}
                          getChildPayload={taskIndex =>
                            this.getTaskPayload(taskIndex, index)
                          }
                          
                        >
                          {member.taskList.map(task => {
                            return (
                              <Draggable key={task} className="ml-2">
                                <Button
                                  className="draggable-item mt-2"
                                >
                                  {task.name}
                                </Button>
                              </Draggable>
                            );
                          })}
                        </Container>
                      </Card>
                    </Col>
                  );
                })}

                </Row>
              </Card.Body>
            </Card>
        </Container>
      </div>
    );
  }
}
