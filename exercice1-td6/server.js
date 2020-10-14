var port = 8080;
console.log("Server listening on " + port);
var socketio = require("socket.io").listen(port);
socketio.sockets.on("connection", function (client) {
    var address = socketio.handshake.address;
    console.log('New connection from ' + address.address + ':' + address.port);
});
