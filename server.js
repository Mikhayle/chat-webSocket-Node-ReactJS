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
                ['users', new Map()],
                ['messages', []],
            ])
        );
    }
    res.send();
})

io.on('connection', socket => {
    socket.on('ROOM: JOIN', ({ roomId, userName }) => {
        // connection to chat-room by roomId
        socket.join(roomId);
        //add user to chat-room to users list
        rooms.get(roomId).get('users').set(socket.id, userName);
        // get userName list in this chat-room
        const users = [...rooms.get(roomId).get('users').values()];
        // send message to users in this chat-room except by yourself
        socket.broadcast.to(roomId).emit('ROOM: JOINED', users);
    })

    console.log('User connected: ', socket.id);
})

server.listen(8888, (error) => {
    if (error) {
       throw Error(error)
    }
    console.log(`Сервер запущен!`);
})
