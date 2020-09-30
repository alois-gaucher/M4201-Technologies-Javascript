var http = require('http');
var url = require('url');
var port = 8080
http.createServer(function (request, response) {
    var message = url.parse(request.url).pathname.toLowerCase();
    console.log(request.url + ' requested')
    if (message == "/welcome") {
        message = "Bienvenue sur le site";
    }
    if (message == "/catalogue") {
        message = "Voici le catalogue";
    }
    response.writeHead(200);
    console.log('Sent : ' + message);
    response.write("<html><body><h1>" + message + "</h1></body></html>");
    response.end();
}).listen(port);
