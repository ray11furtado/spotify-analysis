import watson from 'watson-developer-cloud';
import path from 'path';

const Router = require('express').Router();

const env = require(path.join(__dirname, '../../env'));

const alchemy = watson.alchemy_language({ api_key: env.ALCHEMY_API });

module.exports = Router;


Router.get('/lyrics', (req, res) => {
  const params = {
    text: 'wondering why we ever bother with love if it never lasts, say can you believe it as we are lying on the couch. Do you remember we were sitting there by the water you put your arm around me for the first time',
  };
  alchemy.emotion(params, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      console.log(response);
      res.send(response);
    }
  });
});
