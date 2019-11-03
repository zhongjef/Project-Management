import React from "react"
import "./css/card.css"
class Card extends React.Component {

    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="card">
                <header>{this.props.project_name}</header>
                <div className="card-content">
                    <ul>
                        <li>Kch3coo</li>
                    </ul>
                    
                </div>
            </div>
        );
    }
}

export default Card