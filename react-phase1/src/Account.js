import React, { Component } from "react";
import TopNav from "./components/Navbar/TopNav";

export default class Account extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <div className="media d-flex align-items-center">
          <img
            src="http://i.imgur.com/kjfLsHw.png"
            alt="Rick and Morty"
            width="45"
            className="mr-3 rounded-circle"
          />
          <div className="media-body">
            <h5 className="m-0">Jefferson Zhong</h5>
          </div>
        </div>
      </div>
    );
  }
}
