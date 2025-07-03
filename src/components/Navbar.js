import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-sm navbar-light" style={{backgroundColor:"#1d3557"}}>
        <a
          className="navbar-brand text-white"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Electricity Marketplace
        </a>
        <ul className="navbar-nav px-3">
        <li className="nav-item">
          <a class="nav-link active text-white" aria-current="page" 
          href="#">Home</a>
        </li>
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
