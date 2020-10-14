/* Définition du port */
var port = 8080;
console.log("Server listening on " + port);

/* Import de socket.io et lancement du serveur */
var socketio = require("socket.io").listen(port);

socketio.sockets.on("connection", function (client) {
    /* Log des infos du client */
    socketio.on('connection', function (socket) {
        const address = socket.request.headers.referer;
        console.log('New connection from : ' + address);
    });

    /* Récupération du message du client */
    client.on("clientVersServeur", function (recup) {
        console.log(recup);
        socketio.sockets.emit("somebodyTalks", recup)
    });
});
