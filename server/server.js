var io = require('socket.io')(80);
var fs = require('fs');

io.sockets.on('connection', function (socket) {
    socket.emit('server', {message: 'hello'});
});

// the code below will check for change every 250ms and emit a message to all clients of / , and inform that the file has changed
fs.watchFile('file.txt', {persistent: true, interval: 250}, function (curr, prev) {
    console.log('File changed.')
    io.emit('server', {message: JSON.stringify(curr)});
})


