import db from '../../db';

const Router = require('express').Router();

const Songs = db.model('song');

module.exports = Router;

Router.get('/song/:songID', (req, res, next) => {
	Songs.findOne({
		where: {
			id: req.params.songId,
		},
	})
	.then((song) => {
		if (song) {
			res.send(song)
			.then(() => res.send(200));
		} return res.send(undefined);
	})
	.catch(() => next());
});
