import db from '../../db';

const Router = require('express').Router();

const Users = db.model('user');

module.exports = Router;

Router.get('/info', (req, res, next) => {
	Users.findOne({
		where: {
			spotify_id: req.user.spotify_id,
		},
	})
	.then(user => res.send(user))
	.then(() => res.send(200))
	.catch(() => next());
});

Router.get('/signout', (req, res, next) => {
	req.session.destroy()
	.then(() => {
		res.send(200);
	})
	.catch(next);
});
