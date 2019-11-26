import React, { Component } from "react";
import "./DisplayUserInfo.css";
import TypingEffect from "../TypingEffect/TypingEffect";
export default class DisplayUserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userInfo: this.props.userInfo
        };
      }
  render() {
    return (
      <div> 
        <TypingEffect userName={this.state.userInfo.userName} />
        <div className="content">
        <div className="athlete-card">
          <div className="firstinfo">
            <img src="https://s3.amazonaws.com/uifaces/faces/twitter/mrvanz/128.jpg" />
            <div className="profileinfo">
            <h2 className="user-name-text">{this.state.userInfo.userName}</h2>
              <p className="bio">海贼王！我当定了！</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    );
  }
}
