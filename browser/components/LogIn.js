import React, { Component } from 'react';

require('../style/login.scss');

export default class Login extends Component {
	render() {
		return (
			<div className="container-fluid login text-center">
				<h2>Welcome To Muse Therapy</h2>
				<h4>Muse Therapy Does Sentiment Analysis on
						Songs, Artists or Even Your Spotify Playlist
				</h4>
				<h5>Please Connect to Spotify to Continue</h5>
				<button className="btn-lg btn-success">
					<a href="/auth/spotify">Connect To Spotify</a>
				</button>
				<h6 className="port">
					This is intended for Portfolio Purposes,
				</h6>
			</div>
		);
	}
}
