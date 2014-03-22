var sockets = function () {

    var my = {};
    var io;
    my.connect = function (server) {
        //Sockets
        my.io = require('socket.io').listen(server);

        my.io.sockets.on('connection', function (socket) {
            console.log("connected");
        });
    };

    return my;
};

module.exports = sockets();
