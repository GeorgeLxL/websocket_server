let express = require('express')
const dotenv = require('dotenv')
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

//const port = 3000;
const port = process.env.PORT;

app.get('/', (req, res) => {
	res.json({
		data: 'Success!'
	})
})

io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('new-message', (message) => {
        console.log(message);
        io.emit('new-message', message);
    });
});

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});