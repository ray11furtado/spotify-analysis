import path from 'path';
import express from 'express';

export default (app) => {
	const root = app.getValue('projectRoot');

	const npmPath = path.join(root, './node_modules');
	const publicPath = path.join(root, './public');
	const browserPath = path.join(root, './browser');

		app.use(express.static(npmPath));
    app.use(express.static(publicPath));
    app.use(express.static(browserPath));
};
