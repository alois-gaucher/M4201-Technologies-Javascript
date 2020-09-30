var http = require('http');
var url = require('url');
var port = 8080
http.createServer(function (request, response) {
    var message = url.parse(request.url).pathname;
    console.log(request.url)
    if (message ==  "/Welcome") {
        message = "Bienvenue sur le site";
    }
    if (message ==  "/Catalogue") {
        message = "Voici le catalogue";
    }
    response.writeHead(200);
    response.write("<html><body><h1>" + message + "</h1></body></html>");
    response.end();
}).listen(port);
