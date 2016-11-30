import watson from 'watson-developer-cloud';
import path from 'path';

const Router = require('express').Router();

const env = require(path.join(__dirname, '../../env'));

const alchemy = watson.alchemy_language({ api_key: env.ALCHEMY_API });

module.exports = Router;


Router.post('/emotion', (req, res) => {
  const params = {
    text: req.body.lyrics,
  };
  alchemy.emotion(params, (err, response) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(response).status(200);
    }
  });
});

Router.post('/sentiment', (req, res) => {
  const params = {
    text: req.body.lyrics,
  };
  alchemy.sentiment(params, (err, response) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(response);
    }
  });
});
