import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

require('../style/navbar.scss');

function guestNav(props) {
  return (
    <div className="mynav">
      <h4 className="account">Welcome Guest</h4>
      <button className="logout" onClick={() => props.guestLogout}>Logout</button>
    </div>
  );
}

export default connect(null, actions)(guestNav);
