import React, { Component } from 'react'
import { Card, ListGroup, Button} from 'react-bootstrap';
import {FaCog} from 'react-icons/fa';
import CreateTeamForm from './CreateForms/CreateTeamForm'

export default class TeamTable extends Component {
    constructor(props) {
        super();
        this.state = {
            teams: [
                {
                    name: "Master of html"
                },
                {
                    name: "Master of css"
                },
                {
                    name: "Master of java"
                },
                {
                    name: "Master of CRTL C + CRTL V"
                }
            ]
        }
    }
    
    onSelectTeam(e) {
        console.log(e.target.value)
        this.props.selectTeam(e.target.value)
    }

    onCreateTeam(newTeam) {
        this.state.teams.push(newTeam);
        this.setState({
          team: this.state.teams
        })
      }

    render() {
        return (
            <div className="" style={{width: 300}}>
                 <Card border="dark" style={{ width: '18rem' }}>
                    {/* <Card.Header>Project Jinx</Card.Header> */}
                    <Card.Body>
                    <div className="float-right mt-0"> 
                        <CreateTeamForm createTeam={this.onCreateTeam.bind(this)}/>
                    </div>
                    <Card.Title className="h2 display-flex">Teams 
                       
                    </Card.Title> 
                    <ListGroup className="mt-4" variant="flush">
                        {this.state.teams.map(p => {
                        return (<ListGroup.Item value={p.name} action onClick={(e) => this.onSelectTeam(e)}> {'Team: ' + p.name} </ListGroup.Item>);
                        })}
                    </ListGroup>
                    </Card.Body>
                </Card>
                <br />
            
            

            </div>

            
            
        )
    }
}
