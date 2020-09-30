// load the http library
var http=require('http');
// defining the port number (should be <65536 and >1023)
var port=3000;
// create a listening server
http.createServer(function(request, response) { // callback function
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write("<p>Hello <em>World</em>!</p>"); // body of the response
    response.end(); // end of the response
}).listen(port, function () {    // callback function
    // writing a text in the console
    console.log('Listening on port '+port+'...');
});
