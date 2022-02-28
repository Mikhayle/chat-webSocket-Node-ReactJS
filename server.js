const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
    },
});

app.use(express.json());

const rooms = new Map();

app.get('/rooms', (req, res) => {
    res.json(rooms);
});

app.post('/rooms', (req, res) => {
    const { roomId, userName } = req.body;
    if (!rooms.has(roomId)) {
        rooms.set(
            roomId,
            new Map([
                ['user', new Map()],
                ['messages', []],
            ])
        );
    }
    res.send();
})

io.on('connection', socket => {
    console.log('User connected: ', socket.id);
})

server.listen(8888, (error) => {
    if (error) {
       throw Error(error)
    }
    console.log(`Сервер запущен!`);
})
