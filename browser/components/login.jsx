import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';

require('../style/login.scss');

function login(props) {
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
				This is app intended for Portfolio Purposes
			</h6>
			<h6>
				No Spotify{'?'} Continue As Guset
			</h6>
			<button onClick={() => props.guestLogin()}>
				Guest
			</button>
		</div>
	);
}

export default connect(null, actions)(login);
