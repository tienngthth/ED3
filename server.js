const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static(__dirname));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    socket.on('image', function(data) {
        io.emit('image', data);
    })

    socket.on('checkInValidation', function(data) {
        io.emit('checkInValidation', data);
    })

    socket.on('people', function(data) {
        io.emit('people', data);
    })

    socket.on('temperature', function(data) {
        io.emit('temperature', data);
    })

    socket.on('moisture', function(data) {
        io.emit('moisture', data);
    })

    socket.on('humidity', function(data) {
        io.emit('humidity', data);
    })

    socket.on('reauthenticate', function() {
        io.emit('reauthenticate');
    })
})

server.listen(3000, '0.0.0.0', () => {
    console.log('listening on *:3000');
});