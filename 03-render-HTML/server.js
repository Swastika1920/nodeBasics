var http = require('http');
var fs = require('fs'); // import filesystem

function onRequest(request, response) {
  //change the content type to text/html
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
    console.log('done');
}

http.createServer(onRequest).listen(8000);
