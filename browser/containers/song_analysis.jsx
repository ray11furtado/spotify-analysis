import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Loading from '../components/loading';

const lyricz = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way--in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.';

class songAnalysis extends Component {

  componentWillMount() {
    this.props.analyzeLyrics(this.props.song.lyrics);
  }

  loading() {
    if (!this.props.song.emotion && !this.props.song.sentiment) {
      return (
        <div>
          <h3 className="text-center">Analyzing Lyrics!!</h3>
          <Loading />
        </div>
      );
    } else if (!this.props.song.graph) {
      return (
        <div>
          <h3 className="text-center">Building Graph!!</h3>
          <Loading />
        </div>
      );
    }
    return <div>Hello</div>;
  }


  songInfo() {
    return (
      <div>
        <h3>{this.props.params.artist}</h3>
        <h4>{this.props.params.song}</h4>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>{this.loading()}</div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return { song: state.singleSongAnalysis };
}

export default connect(mapStateToProps, actions)(songAnalysis);
