var System = require('systemjs');

System.config({
  transpiler: 'babel',
  baseURL: 'src'
});

System.import('server/server').then(function(server) {
  console.log(m);
});