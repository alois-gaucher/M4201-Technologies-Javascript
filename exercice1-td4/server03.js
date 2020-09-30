var http = require('http');
var url = require('url');
var port = 8080
http.createServer(function (request, response) {
    var requested = url.parse(request.url).pathname.toLowerCase();
    console.log(requested.url + ' requested')
    if (requested == "/welcome") {
        message = "Bienvenue sur le site";
    }
    else if (requested == "/catalogue") {
        message = "Voici le catalogue";
    }
    else if (requested == "/hello") {
        message = "Hello !";
    }
    else if (requested == "/byebye") {
        message = "Goodbye !";
    }
    else {
        message = "Route not found, sorry...";
    }
    response.writeHead(200);
    console.log('Sent : ' + message);
    response.write("<html><body><h1>" + message + "</h1></body></html>");
    response.end();
}).listen(port);
