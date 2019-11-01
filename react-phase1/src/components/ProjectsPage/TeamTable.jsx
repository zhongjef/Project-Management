import React, { Component } from 'react'
import { Button, Container, Row, Col} from 'react-bootstrap';

export default class TeamTable extends Component {
    constructor(props) {
        super();
        this.state = {
            teams: [
                {
                    "name": "Master of html"
                },
                {
                    "name": "Master of css"
                },
                {
                    "name": "Master of java"
                },
                {
                    "name": "Master of CRTL C + CRTL V"
                }
            ]
        }
    }
    
    onSelectTeam(e) {
        console.log(e.target.value)
        this.props.selectTeam(e.target.value)
    }
    render() {
        return (
            <div className="border border-dark pd-2" style={{width: 300}}> 
            <Col className="mx-100 mb-2">
            {this.state.teams.map(p => {
                console.log(p)
              return (
                  <Row className="mt-2 "> 
                  <Button variant="dark" value={p.name} onClick={(e) => this.onSelectTeam(e)}>
                    {'Team: ' + p.name}
                  </Button>
                  </Row>
                  
              );
            })}
            </Col>
            </div>

            
            
        )
    }
}
