var io = require('socket.io')(80);
var fs = require('fs');

const configFilename = process.argv[2]
io.sockets.on('connection', function (socket) {
    console.log(`Connected: ${socket.id}`)
    emitFile(configFilename)
});

// the code below will check for change every 250ms and emit a message to all clients of / , and inform that the file has changed
fs.watch(configFilename, {encoding: 'buffer'}, function (eventType, filename) {

    if (eventType === "change") {
        console.log(`${filename} changed at ${new Date().toTimeString()}, reading...`)
        emitFile(configFilename)
    } else {
        console.log(`Unhandled event, ${eventType}, skipping.`)
        console.log(`Filename: ${filename}`)
    }

})

function emitFile(filename) {
    fs.readFile(filename, 'utf8', function(err, data) {
        if (err) throw err;
        console.debug('Read.');

        console.log(JSON.stringify(data).slice(0,40))
        io.emit('server', {text: data, modification_time: new Date().toISOString()});
    });
}
