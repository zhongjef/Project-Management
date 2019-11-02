import React from "react"
import "./css/card.css"
class Card extends React.Component {
    render () {
        return (
            <div className="card">
                <header>Team</header>
                <div className="card-content">
                    <ul>
                        <li>t1</li>
                        <li>t2</li>
                        <li>t3</li>
                    </ul>
                    
                </div>
            </div>
        );
    }
}

export default Card