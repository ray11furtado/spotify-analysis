import chalk from 'chalk';
import Server from 'http';
import App from './app';
// import db from './db';

//	Start node Server

const myServer = Server.createServer();

const createApp = () => myServer.on('request', App());

const startServer = () => {
  const PORT = process.env.PORT || 3001;
  myServer.listen(PORT, () => {
    console.log(chalk.cyan(`Server is running on PORT, ${chalk.magenta(PORT)}`));
	});
};

// createApp.then(startServer).catch(err =>
// 	console.error(chalk.red(err.stack)));
createApp();
startServer();
