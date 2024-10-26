const express = require('express');
const Server = require('socket.io').Server;
const createServer = require('http').createServer;
const cors = require('cors');

const app = express();



app.use(cors({ origin: 'http://localhost:3000', credentials: true }));


const server = createServer(app);
const io = new Server(server , {
    cors:{
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true
    }
});





io.on('connection', (socket) => {
    console.log('User connected');
    console.log("Socket ID  " + socket.id);
    

    socket.on('message' , (data) => {
        // console.log(data);
        socket.broadcast.emit('recieved-msg' , data);
    });

    socket.emit('sent' , "Hello from server" + "Your Client ID is " + socket.id);



});



server.listen(5000, () => {
    console.log('Server is running on port 5000');
});