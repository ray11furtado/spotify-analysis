import path from 'path';
import express from 'express';
import config from './config';
import routes from './routes';

const app = express();

export default (db) => {
	config(app, db);
	app.use('/api', routes);

	// middleware to catch nay urls with a file extension
	app.use((req, res, next) => {
		if (path.extname(req.path).length > 0) {
			res.status(404).end();
		} else {
				next(null);
		}
	});

	app.get('/*', (req, res) => {
		res.sendFile(app.get('indexHTMLPath'));
	});
	// Error Catching
	app.use((err, req, res) => {
		console.log('from the error catching middleware');
		console.log(err);
		console.error(err.stack);
		res.status(err.status || 500).send(err.message || 'Internal server error');
	});
	return app;
};
