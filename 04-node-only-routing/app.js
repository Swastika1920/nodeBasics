var url = require('url'); //core module
var fs = require('fs');

function renderHTML(path, response) {
    fs.readFile(path, null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}

module.exports = {
  handleRequest: function(request, response) {
      response.writeHead(200, {'Content-Type': 'text/html'});

      var path = url.parse(request.url).pathname;//get it after requesting the url
      switch (path) {
          case '/':
              renderHTML('./index.html', response);
              //console.log('index checked');
              break;
          case '/login':
              renderHTML('./login.html', response);
              //console.log('login checked');
              break;
          default:
              response.writeHead(404);
              response.write('Route not defined');
              response.end();
      }

  }
};
