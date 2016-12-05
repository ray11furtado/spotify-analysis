import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';


class Guest extends Component {
  render() {
    return(
      <div>Welcome Guest</div>
    );
  }
}

function mapStateToProps(state) {
	return { search: state.search, song: state.singleSongAnalysis };
}
export default connect(mapStateToProps, actions)(Guest);
