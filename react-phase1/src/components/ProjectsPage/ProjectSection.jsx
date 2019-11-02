import React, { Component } from 'react'
import Simple from './Simple';
import TeamTable from './TeamTable';
import TeamSection from './TeamSection'
import { Button, Card, Row, Col} from 'react-bootstrap';
import {FaPlusSquare} from 'react-icons/fa'

export default class ProjecSection extends Component {
    constructor(){
        super();
        this.state = {
            currTeam: "No Team Selected",
        }
        this.selectTeamListenner = React.createRef();
    }
    onSelectTeam(team) {
        this.setState({
          currTeam: team
        })

        this.selectTeamListenner.current.handleTeamChange(team);
      }
    
    
    render() {
        return (
            <div>
                <Row>
                <Col md={"auto"}> 
                    <TeamTable selectTeam={this.onSelectTeam.bind(this)}/>
                </Col>
                <Col className="border border-primary pd-2" md={"auto"}  style={{minWidth: '200px', backgroundColor: "white"}}> 
                    <Simple className="mr-2" ref={this.selectTeamListenner} />
                </Col>
            </Row>
            <Row className="mt-3">

            <Card>
                <Card.Header>Team Section 
                    <Button className="float-right">
                        Invite New Member <FaPlusSquare />
                    </Button>             
                </Card.Header>
                <Card.Body>
                    <Card.Title>{this.state.currTeam}</Card.Title>
                    <TeamSection ref={this.selectTeamListenner}/>
                </Card.Body>
            </Card>

                
            </Row>

            </div>
            
        )
    }
}
