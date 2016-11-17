import passport from 'passport';
import spotify from 'passport-spotify';

const SpotifyStrategy = spotify.Strategy;

export default (app, db) => {
	const User = db.model('user');

	const spotifyConfig = app.getValue('env').SPOTIFY;
	const spotifyCredentials = {
		clientID: spotifyConfig.clinetID,
		clientSecret: spotifyConfig.clientSecret,
		callbackURL: spotifyConfig.callbackURL,
	};

	const verifyCallback = (accessToken, refreshToken, profile, done) => {
		User.findOne({
			where: {
				spotify_id: profile.id,
			},
		}).then((user) => {
			if (user) return user;
			return User.create({
				spotify_id: profile.id,
			});
		}).then((userToLogin) => {
			done(null, userToLogin);
		}).catch((err) => {
			console.log('Error creating user from Spotify auth', err);
			done(err);
		});
	};
	passport.use(new SpotifyStrategy(spotifyCredentials, verifyCallback));
	app.get('/auth/spotify', passport.authenticate('facebook'));
	app.get('/auth/facebook/callback',
					passport.authenticate('spotify', { failureRedirect: '/login' }),
					(req, res) => res.redirect('/'));
};

