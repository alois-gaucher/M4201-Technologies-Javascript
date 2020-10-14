/* Définition du port */
var port = 8080;
console.log("Server listening on " + port);

/* Import de socket.io et lancement du serveur */
var socketio = require("socket.io").listen(port);

socketio.sockets.on("connection", function (client) {
    /* Récupération des infos du client */
    var address = socketio.handshake.address;
    /* Log des infos du client */
    console.log('New connection from ' + address.address + ':' + address.port);
});
