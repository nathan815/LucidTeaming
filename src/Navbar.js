import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from 'react-materialize';
import './css/navbar.css';

class Navbar extends React.Component {
  logout = (e) => {
    e.preventDefault();
    this.props.logout();
  }
  render() {
    const userId = this.props.auth.user && this.props.auth.user.uid;
    return (
       <nav id="navbar">
        <div className="nav-wrapper light-blue darken-4">
          <div className="container">
            <Link to="/" className="left brand-logo">Lucid Teaming</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {
                this.props.auth.isLoggedIn
                ? (
                  <React.Fragment>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to={`/users/${userId}`}>My Profile</Link></li>
                    <li><a onClick={(e)=>this.logout(e)}>Logout</a></li>
                  </React.Fragment>
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
  }
}

export default Navbar;
