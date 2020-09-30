function creationAuto(port, message) {
    var server = require('http');
    server.createServer(function (request, response) {
        console.log(request.client.ipAddress)
        response.writeHead(200);
        response.write("<html><body><h1>"+ message +"</h1></body></html>");
        response.end();
    }).listen(port);
}

creationAuto('8080', 'Salut !')
creationAuto('8081', 'Coucou !')
