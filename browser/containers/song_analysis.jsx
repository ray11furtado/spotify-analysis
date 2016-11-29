import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Loading from '../components/loading';

class songAnalysis extends Component {

  componentWillMount() {
    this.props.analyzeLyrics(this.props.songInfo.lyrics);
  }

  loading() {
    if (!this.props.song.lyrics) {
      return (
        <div>
          <h3>Fetching Lyrics</h3>
          <Loading />
        </div>
      );
    }
    return <h2>Done</h2>;
  }

  render() {
    return (
      <div>{this.loading()}</div>
    );
  }
}

function mapStateToProps(state) {
  return { song: state.singleSongAnalysis };
}

export default connect(mapStateToProps, actions)(songAnalysis);
