import express from 'express';
import http from 'http';
import { renderToString } from 'react-dom/server'
import indexPage from '../views/index.jade!';
import { match, RouterContext } from 'react-router'
import routes from "../shared/routes";

export const app = express();

app.server = http.createServer(app);
app.get('/*', function (req, res) {
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
