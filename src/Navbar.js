import React from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';

export default class Navbar extends React.Component {
  render() {
    return (
       <nav>
        <div className="nav-wrapper light-blue darken-4">
          <a href="#" className="left brand-logo">Find My Team</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Sign Up</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
