import React from 'react';
import { Link } from 'react-router-dom';
import "../css/home.css";

export default class Home extends React.Component {
  render() {

    return (
      <div>
        <div className="section cyan" id="header">
          <div className="header center white-text">
            <h4>Developers meet Developers</h4>
            <h6>Find the developers you need for your project!</h6>
          </div>

          <div className="row">
            <div className="col s12 m6">
              <Link to="/login" className="waves-effect waves-light btn-large cardFix">Login</Link>
            </div>  
          </div>



        </div>
        

      </div>
    );
  }
}