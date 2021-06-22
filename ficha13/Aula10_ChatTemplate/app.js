// require and instantiate express
var express = require('express');
var app = express();
const { v4: uuidv4 } = require('uuid')


app.set('view engine', 'ejs'); // set up ejs for templating

//middlewares
app.use(express.static('public'));

// express server
var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port);
});

// route
app.get('/', function (req, res) {
    res.render('index.ejs');
});

var io = require('socket.io')(server);

// Registar o evento Connection
io.on('connection', (socket) => {
    console.log("User has connected");
    socket.username = "user" + uuidv4();


    io.sockets.emit('user_connected', { username: socket.username });


    socket.on('disconnect', () => {
        io.sockets.emit('user_disconnected', { username: socket.username });
    });

    socket.on('send_message', (data) => {
        
        io.sockets.emit('send_message', { message: data.message, username: socket.username });

    });

});






