import React, { Component } from 'react'
import { Card, ListGroup, Button} from 'react-bootstrap';
import CreateTeamForm from './CreateForms/CreateTeamForm'

export default class TeamTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamList: this.props.teams
        }
        console.log(this.state.teamList)
    }
    
    onSelectTeam(e) {
        console.log(e.target.value)
        this.props.selectTeam(e.target.value)
    }

    onCreateTeam(newTeam) {
        const team = {
            teamName: newTeam.name,
            contributors: []
        }
        console.log(newTeam)
        this.state.teamList.push(team);
        this.setState({
          teamList: this.state.teamList
        })
        //call database for post request
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
                        {this.state.teamList.map(p => {
                        return (<ListGroup.Item value={p.teamName} action onClick={(e) => this.onSelectTeam(e)}> {'Team: ' + p.teamName} </ListGroup.Item>);
                        })}
                    </ListGroup>
                    </Card.Body>
                </Card>
                <br />
            
            

            </div>

            
            
        )
    }
}
