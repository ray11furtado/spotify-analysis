import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class songAnalysis extends Component {

  componentWillMount() {
    this.props.analyzeLyrics(this.props.songInfo.lyrics);
  }
}

function mapStateToProps(state) {
  return { songInfo: state.search,
            songAnalysis: state.analysis };
}

export default connect(mapStateToProps, actions)(songAnalysis);
