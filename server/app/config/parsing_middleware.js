import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

export default (app) => {
	app.use(cookieParser());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
};
