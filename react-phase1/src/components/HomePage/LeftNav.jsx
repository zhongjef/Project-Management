import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import PopupAction from "../../components/CreateProject/PopupAction";

class LeftNav extends Component {
  state = {};
  render() {
    return (
      <div className="vertical-nav bg-white">
        <div className="py-4 px-4 bg-white">
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
        <List-group>
          <button className="rounded-0 list-group-item list-group-item-action d-flex justify-content-between active">
            Current Tasks
            <span className="badge badge-light badge-pill">14</span>
            <span className="badge badge-danger badge-pill">10000</span>
          </button>
          <button className="list-group-item list-group-item-action  d-flex justify-content-between">
            Archived Tasks
            <span className="badge badge-primary badge-pill">14</span>
          </button>
          <button
            className="list-group-item list-group-item-action text-center "
            disabled
          >
            Statistic
          </button>
          <div className="list-group-item list-group-item-action text-center ">
            <PopupAction />
          </div>
        </List-group>
      </div>
    );
  }
}

export default LeftNav;
