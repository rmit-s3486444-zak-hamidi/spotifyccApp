import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  handleLogOut = async event => {
    event.preventDefault();
    try {
      Auth.signOut();
      this.props.auth.setAuthStatus(false);
      this.props.auth.setUser(null);
    }catch(error) {
      console.log(error.message);
    }
  }
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="spotify-logo.png" width="112" height="28" alt="spotify logo" />
          </a>
        </div>

          <div className="navbar-end">
            <div className="navbar-item">
              {this.props.auth.isAuthenticated && this.props.auth.user && (
                <p>
                  Hello {this.props.auth.user.username}
                </p>
              )}
              <div className="buttons">
                {!this.props.auth.isAuthenticated && (
                  <div>
                    <a href="/register" className="button is-primary">
                      <strong>Register</strong>
                    </a>
                    <a href="/login" className="button is-light">
                      Log in
                    </a>
                  </div>
                )}
                {this.props.auth.isAuthenticated && (
                  <div>
                    <a href="/mapcontainer" className="button is-light">
                  Your Location
                  </a>
                  <a href="/artists" className="button is-light">
                  Search Artist
                  </a>
                  <a href="/content" className="button is-light">
                  Currently Listening
                  </a>
                  <a href="/changepassword" className="button is-light">
                  Change Password
                  </a>
                  <a href="/" onClick={this.handleLogOut} className="button is-light">
                  <Link to="/">
                    Log out 
                    </Link>
                  </a>
                  </div>
                )}
              </div>
          </div>
        </div>
      </nav>
    )
  }
}