import React, { Component } from 'react'
import Simple from './Simple';
import TeamTable from './TeamTable';
import TeamSection from './TeamSection'
import { Button, Card, Row, Col} from 'react-bootstrap';


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
            <TeamSection ref={this.selectTeamListenner}/>
                
            </Row>

            </div>
            
        )
    }
}
