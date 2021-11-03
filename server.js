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
    socket.on('image', function(data) { // listen on client emit 'data'
        io.emit('image', data); // emmit to socket
    })

    socket.on('result', function(data) {
        io.emit('result', data);
    })
})

server.listen(3000, () => {
    console.log('listening on *:3000');
});