import variables from './app_variables';
import staticMiddleware from './static_middleware';
import parsingMiddleware from './parsing_middleware';
import auth from './auth';

export default (app, db) => {
	app.setValue = app.set.bind(app);

	app.getValue = path => app.get(path);
	variables(app);
	staticMiddleware(app);
	parsingMiddleware(app);
	app.use(app.getValue('log'));
	auth(app, db);
};
