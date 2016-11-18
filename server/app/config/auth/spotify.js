import passport from 'passport';
import spotify from 'passport-spotify';

const SpotifyStrategy = spotify.Strategy;

export default (app, db) => {
	const User = db.model('user');
	const spotifyConfig = app.getValue('env').SPOTIFY;
	const spotifyCredentials = {
		clientID: spotifyConfig.clientID,
		clientSecret: spotifyConfig.clientSecret,
		callbackURL: spotifyConfig.callbackURL,
	};

	const verifyCallback = (accessToken, refreshToken, profile, done) => {
		console.log(profile);
		User.findOne({
			where: {
				spotify_id: profile.id,
			},
		})
		.then((user) => {
			if (user) {
				return user;
			} return User.create({
				spotify_id: profile.id,
			});
		})
		.then((userToLogin) => {
			done(null, userToLogin);
		})
		.catch((err) => {
			console.error('Spotify Auth', err);
			done(err);
		});
	};

	passport.use(new SpotifyStrategy(spotifyCredentials, verifyCallback));
	app.get('/auth/spotify', passport.authenticate('spotify',
		{ scope: ['playlist-read-private', 'user-read-private', 'user-library-read'] }));

  app.get('/auth/spotify/callback',
        passport.authenticate('spotify', { failureRedirect: '/' }),
           (req, res) => {
            res.redirect('/');
  });
};

