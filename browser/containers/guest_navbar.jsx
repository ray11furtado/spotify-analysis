import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

require('../style/navbar.scss');

function guestNav(props) {
  return (
    <div className="container mynav">
      <div className="row">
        <div className="account col-sm-2">Welcome Guest</div>
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
