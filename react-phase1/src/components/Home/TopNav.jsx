import React, {Component} from 'react';
class TopNav extends Component {
  state = {};
  render() {
    return (
      <nav class='navbar navbar-expand-sm navbar-dark bg-dark'>
        <a class='navbar-brand' href='#'>
          Panel Board
        </a>
        <ul class='navbar-nav ml-auto'>
          <li class='nav-item dropdown '>
            <a
              class='nav-link dropdown-toggle'
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
