import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import EmotionGraph from '../components/emotion_graph';
import SentimentGraph from '../components/sentiment_graph';
import Loading from '../components/loading';
import Credits from '../components/credits';

require('../style/graphs.scss');

class songAnalysis extends Component {

  componentWillMount() {
    this.props.analyzeLyrics(this.props.song.lyrics);
  }

  buildGraphs() {
    if (!this.props.song.emotion && !this.props.song.sentiment) {
      return (
        <div>
          <h3 className="text-center">Analyzing Lyrics & Building Graphs!!!</h3>
          <Loading />
        </div>
      );
    }
    return (
      <div>
        <EmotionGraph emotion={this.props.song.emotion} />
        <SentimentGraph sentiment={this.props.song.sentiment} />
      </div>
    );
  }

  songInfo() {
    return (
      <div>
        <h3>{this.props.params.artist}</h3>
        <h4>{this.props.params.song}</h4>
        <div>{this.buildGraphs()}</div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>{this.songInfo()}</div>
        <Credits />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { song: state.singleSongAnalysis };
}

export default connect(mapStateToProps, actions)(songAnalysis);
