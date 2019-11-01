import React, { Component } from 'react'
import Simple from './Simple';
import TeamTable from './TeamTable';
import { Button, Container, Row, Col} from 'react-bootstrap';

export default class ProjecSection extends Component {
    constructor(){
        super();
        this.state = {
            currTeam: "initial team",
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
            <Row>
                <Col md={"auto"}> 
                    <TeamTable selectTeam={this.onSelectTeam.bind(this)}/>
                </Col>
                <Col className="border border-primary pd-2" md={"auto"}> 
                    <Simple className="mr-2" ref={this.selectTeamListenner}/>
                </Col>
                
            </Row>
        )
    }
}
