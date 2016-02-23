import express from 'express';
import http from 'http';
import React from 'react';
import { renderToString } from 'react-dom/server'
import indexPage from '../views/index.jade!';
import { match, RouterContext } from 'react-router'
import routes from "../shared/routes";

export const app = express();

app.use('/jspm_packages', express.static('jspm_packages'));
app.use('/config.js', express.static('config.js'));
app.use('/client', express.static('src/client'));
app.use('/shared', express.static('src/shared'));

app.server = http.createServer(app);
app.get('/*', function (req, res) {
  console.log('Request server', req.url)
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      let content = renderToString(<RouterContext {...renderProps} />);
      res.status(200).send(indexPage({ content: content }));
    } else {
      res.status(404).send('Not found')
    }
  });
});
