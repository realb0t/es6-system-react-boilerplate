System.import('src/server/server.js').then(function(server) {
  server.app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
}).catch(function(error) {
  console.log('load error', error)
});