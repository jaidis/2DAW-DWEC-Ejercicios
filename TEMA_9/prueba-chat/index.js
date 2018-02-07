var express = require("express");
var path = require("path");
var app = express();

// Define the port to run on
app.set("port", 3000);

app.use(express.static(path.join(__dirname, "public")));

// Listen for requests
var server = app.listen(app.get("port"), function() {
  var port = server.address().port;
  console.log("Magic happens on port " + port);
});

var io = require("socket.io")(server);
var usuario = '';
io.on("connection", function(socket) {
  console.log("A user connected");
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });


  socket.on('nick message', function(msg) {
    console.log('nick: ' + msg);
    io.sockets.emit('nick message', msg);
    usuario = msg;
    // console.log(usuario);
  });

  socket.on('chat message', function(msg){
    console.log(msg[0] + ' message: ' + msg[1]);
    io.sockets.emit('chat message', msg);
  });
});
