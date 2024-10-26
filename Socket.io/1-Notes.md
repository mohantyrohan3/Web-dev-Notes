1. Web Sockets are a protocol where first a connection is established and message is sent both ways duplex

2. 2 functions emit and on  // emit sends the data and on recieves the data

3. socket is for client and io is for entire server

4. to() for communication between 2 sockets 
5. join() for group communication


6. Install socket.io and socket.io-client packages in the backend folder


7. const server = createServer(app);

const io = new Server(server , {});


8. io.on('connection', (socket) => {
    console.log('User connected');
    console.log("Socket ID  " + socket.id);
});


In Frontend import io from socket.io-client
const socket = io('http://localhost:5000');


9. Add cors options

const io = new Server(server , {
    cors:{
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true
    }
});


server.listen(5000, () => {
    console.log('Server is running on port 5000');
});


10. 