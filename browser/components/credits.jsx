import React from 'react';

require('../style/credits.scss');

export default () =>
  <div className="container">
    <h3>Lyric Search Power By <a className="green" href="https://developer.musixmatch.com/"> MusixMatch </a></h3>
    <h3>Emotion & Sentiment Analysis Done Through <a className ="green" href="http://www.alchemyapi.com/">Alchemyapi</a> </h3>
    <h4> Please Note Only 30% of Song Lyrics are Actually Analyzed </h4>
  </div>;
