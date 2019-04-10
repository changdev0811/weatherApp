import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';

class Header extends Component {

    onLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/data/new">
                <h5>Post Data</h5>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/data">
                <h5>My Data</h5>
              </Link>
            </li>
            <li className="nav-item">
              <a
                href=""
                onClick={this.onLogout.bind(this)}
                className="nav-link"
              >
                <h5>Logout</h5>
              </a>
            </li>
          </ul>
        );
    
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        WeatherApp
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#mobile-nav"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        {isAuthenticated ? authLinks : null}
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});
  
export default connect(mapStateToProps, { logout })(Header);