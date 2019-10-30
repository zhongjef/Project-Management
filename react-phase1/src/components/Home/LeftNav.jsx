import React, {Component} from 'react';
class LeftNav extends Component {
  state = {};
  render() {
    return (
      <div className='vertical-nav bg-white'>
        <div className='py-4 px-4 bg-light'>
          <div className='media d-flex align-items-center'>
            <img
              src='http://i.imgur.com/kjfLsHw.png'
              alt='Rick and Morty'
              width='45'
              className='mr-3 rounded-circle'
            />
            <div className='media-body'>
              <h5 className='m-0'>Jefferson Zhong</h5>
            </div>
          </div>
        </div>
        <ul className='nav flex-column bg-white'>
          <li className='nav-item'>
            <button className='btn btn-dark btn-block'>Main</button>
          </li>
          <li className='nav-item'>
            <button className='btn btn-dark btn-block'>Tasks</button>
          </li>
          <li className='nav-item'>
            <button className='btn btn-dark btn-block'>Statistics</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default LeftNav;
