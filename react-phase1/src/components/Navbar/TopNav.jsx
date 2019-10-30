import React, {Component} from 'react';

class TopNav extends Component {
  state = {};
  render() {
    return (

      <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
        <a className='navbar-brand' href='#'>
          Panel Board
        </a>

        <ul className='navbar-nav ml-auto'>
        <li className='nav-item dropdown '>
            <a className='nav-link' href='/home'>
             Home
            </a>
          </li>
          <li className='nav-item dropdown '>
            <a className='nav-link' href='/project'>
             Project
            </a>
          </li>
          <li className='nav-item dropdown '>
            <a
              className='nav-link dropdown-toggle'
              href='#'
              id='dropdown'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'>
              Noticification
            </a>
          </li>

        </ul>
      </nav>
    );
  }
}

export default TopNav;
