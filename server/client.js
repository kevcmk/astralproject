var io = require('socket.io-client');
var fs = require('fs');

const socket = io('http://localhost');

console.log(socket.id); // undefined

socket.on('connect', () => {
    console.log(socket.id); // 'G5p5...'
});
socket.on('server', (data) => {
    console.log('server')
    console.log(data)
});

