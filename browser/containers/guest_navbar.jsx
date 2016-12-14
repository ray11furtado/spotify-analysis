import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions';

require('../style/navbar.scss');

function guestNav(props) {
  return (
    <div className="container mynav">
      <div className="row">
        <Link className="account col-sm-1" to={'guest'}>Home</Link>
        <button
          className="guest-logout col-sm-1" onClick={() => props.guestLogout()}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default connect(null, actions)(guestNav);
