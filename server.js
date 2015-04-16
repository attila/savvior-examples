/*
 * node static file server:
 * modified from https://gist.github.com/rpflorence/701407
 */
/*jshint evil: true */

var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
var port = process.argv[2] || 8888;
var types = {
  'html': 'text/html',
  'css': 'text/css',
  'js': 'application/javascript'
};
var site = 'http://localhost:' + port;

http.createServer(function (request, response) {
  var uri = url.parse(request.url).pathname;
  var filename = path.join(__dirname, uri);

  fs.exists(filename, function (exists) {
    if (!exists) {
      response.writeHead(404, {'Content-Type': 'text/plain'});
      response.write('404 Not Found\n');
      response.end();
      return;
    }

    if(!fs.lstatSync(filename).isDirectory()) {
      var type = filename.split('.');
      type = type[type.length - 1];

      response.writeHead(200, { 'Content-Type': types[type] + '; charset=utf-8' });
      fs.createReadStream(filename).pipe(response);
    }
    else {
      // Redirect users to default example URL.
      response.writeHead(301, {'Location': site + '/html/example.html' });
      response.end();
   }
  });
}).listen(parseInt(port, 10));

console.log('\u000AStatic file server running at => ' + site + '\u000A\u000APress Ctrl + C to shutdown');
