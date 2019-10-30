import React, {Component} from 'react';
class LeftNav extends Component {
  state = {};
  render() {
    return (
      <div class='vertical-nav bg-white'>
        <div class='py-4 px-4 bg-light'>
          <div class='media d-flex align-items-center'>
            <img
              src='http://i.imgur.com/kjfLsHw.png'
              alt='Rick and Morty'
              width='45'
              class='mr-3 rounded-circle'
            />
            <div class='media-body'>
              <h5 class='m-0'>Jefferson Zhong</h5>
            </div>
          </div>
        </div>
        <ul class='nav flex-column bg-white'>
          <li class='nav-item'>
            <button class='btn btn-dark btn-block'>Main</button>
          </li>
          <li class='nav-item'>
            <button class='btn btn-dark btn-block'>Tasks</button>
          </li>
          <li class='nav-item'>
            <button class='btn btn-dark btn-block'>Statistics</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default LeftNav;
