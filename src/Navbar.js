import React from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';

const Navbar = (props) => {
  return (
     <nav>
      <div className="nav-wrapper light-blue darken-4">
        <div className="container">
          <Link to="/" className="left brand-logo">Find My Team</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            { props.auth.isLoggedIn ? (
                <li><a href="#" onClick={this.logout}>Logout</a></li>
              ) : (
                <React.Fragment>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/register">Sign Up</Link></li>
                </React.Fragment>
              )
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
