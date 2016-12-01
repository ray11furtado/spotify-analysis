import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import EmotionGraph from '../components/emotion_graph';
import Loading from '../components/loading';

class songAnalysis extends Component {

  componentWillMount() {
    this.props.analyzeLyrics(this.props.song.lyrics);
  }

  loading() {
    console.dir(this.props);
    if (!this.props.song.emotion && !this.props.song.sentiment) {
      return (
        <div>
          <h3 className="text-center">Analyzing Lyrics!!</h3>
          <Loading />
        </div>
      );
    }
    return <EmotionGraph emotion={this.props.song.emotion} />;
  }


  songInfo() {
    console.dir(this.props);
    return (
      <div>
        <h3>{this.props.params.artist}</h3>
        <h4>{this.props.params.song}</h4>
        <div>{this.loading()}</div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>{this.songInfo()}</div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return { song: state.singleSongAnalysis };
}

export default connect(mapStateToProps, actions)(songAnalysis);
