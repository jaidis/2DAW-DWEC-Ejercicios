// Iniciando el servidor con sus variables

let express = require('express')
let app = express();
let http = require('http');
let server = http.Server(app);
let socketIO = require('socket.io');
let io = socketIO(server);
let path = require('path');

//Sirviendo la web dentro de la carpeta public
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));

//Variables propias del ServidorSocketService

let usuarios = [];

//Detección de eventos
io.on('connection', (socket) => {
  console.log('Se ha iniciado una nueva conexión');
  socket.on('new-usuario', (usuario) => {
    console.log('Usuario Identificado: ' + usuario);
    usuarios.push({nombre: usuario, puntuacion: 0});
    console.log(usuarios);
    if (usuarios.length == 2) {
      console.log('Tenemos 2 jugadores disponibles');
      console.log(usuarios);
      io.emit('interfaz-bienvenida', 'borrar');
    }
    socket.on('disconnect', () => {
      console.log('Se ha desconectado: ' + usuario);
      for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nombre == usuario){
          usuarios.splice(i, 1);
        }
      }
      console.log(usuarios);
    });
  });
});

server.listen(port, () => {
  console.log(`Iniciado en puerto: ${port}`);
});
