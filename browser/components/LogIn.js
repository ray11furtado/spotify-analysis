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
				<a href="/auth/spotify">
					<button className="btn-lg btn-success">
						Connect To Spotify
					</button>
				</a>
				<h6 className="port">
					This is intended for Portfolio Purposes
				</h6>
			</div>
		);
	}
}
