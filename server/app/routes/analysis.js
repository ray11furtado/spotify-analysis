import watson from 'watson-developer-cloud';
import path from 'path';

const Router = require('express').Router();

const env = require(path.join(__dirname, '../../env'));

const alchemy = watson.alchemy_language({ api_key: env.ALCHEMY_API });

module.exports = Router;


Router.post('/lyrics', (req, res) => {
  console.log(req.body.lyrics);
  const params = {
    text: req.body.lyrics,
  };
  alchemy.emotion(params, (err, response) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(response);
    }
  });
});
