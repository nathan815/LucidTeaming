import React from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';

class Navbar extends React.Component {
  logout = (e) => {
    e.preventDefault();
    this.props.logout();
  }
  render() {
    return (
       <nav>
        <div className="nav-wrapper light-blue darken-4">
          <div className="container">
            <Link to="/" className="left brand-logo">Team Me Up, Scotty!</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {
                this.props.auth.isLoggedIn
                ? (
                  <React.Fragment>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><a onClick={(e)=>this.logout(e)}>Logout</a></li>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <li><Link to="/">Home</Link></li>
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
  }
}

export default Navbar;
