var http = require('http');//import http module
var module1 = require('./module1');
var module2 = require('./module2');
//With module1  where the object is created and have to export each things separately


// function onRequest(request,response){
//
//   response.writeHead(200,{'Content-Type': 'text/plain'});
//   response.write(module1.string12);
//   module1.function1();
//   response.end();
// }

//with module2 when u export everything
// function onRequest(request,response){
//
//  response.writeHead(200,{'Content-Type': 'text/plain'});
//  response.write(module2.myVariable);
//  module2.myFunction();
//  response.end();
// }
//http.createServer(onRequest).listen(8000);

//Anonymous functions

http.createServer(function (request,response){

 response.writeHead(200,{'Content-Type': 'text/plain'});
 response.write(module2.myVariable);
 module2.myFunction();
 response.end();
}).listen(8000);
