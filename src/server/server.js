import express from 'express';
import http from 'http';

export let app = express();
app.server = http.createServer(app);
app.get('/', (req, res) => {
  res.send('Hello World!');
});
