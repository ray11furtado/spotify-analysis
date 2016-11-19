import router from 'express';


const myRouter = router.Router();

myRouter.post('signup', (req, res) => {
	Users.findOne({
		where: {
			email: req.body.email,
		},
	}).then((user) => {
		if (user) {
			res.sendStatus(403);
			throw new Error('Email is already registered');
		}
		return User.create(req.body);
	}).then(() => res.send(200));
});

myRouter.get('info', (req, res, next) => {
	Users.findOne({
		where: {
			spotify_id: req.user.spotify_id,
		},
	})
	.then(user => res.send(user))
	.then(() => res.send(200))
	.catch(() => next());
});
export default myRouter;
