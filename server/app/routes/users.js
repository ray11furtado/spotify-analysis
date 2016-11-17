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
