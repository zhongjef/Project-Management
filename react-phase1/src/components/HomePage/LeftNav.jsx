import React, { Component } from "react";
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
        <list-group>
          <button
            type="button"
            className="list-group-item list-group-item-action text-center active"
          >
            Current Tasks
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-action text-center "
          >
            Archived Tasks
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-action text-center "
            disabled
          >
            Statistic
          </button>
        </list-group>
      </div>
    );
  }
}

export default LeftNav;
