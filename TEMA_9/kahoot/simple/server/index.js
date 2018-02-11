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
let confirmados = 0;

//Detección de eventos
io.on('connection', (socket) => {
  console.log('Se ha iniciado una nueva conexión');
  socket.on('new-usuario', (datos) => {
    console.log('Usuario Identificado: ' + datos.usuario);
    usuarios.push({nombre: datos.usuario, puntuacion: 0});
    socket.join(datos.sala);
    var habitacion = io.sockets.adapter.rooms[datos.sala];
    console.log('Habitantes de '+ datos.sala + ': '+ habitacion.length);
    console.log(usuarios);
    if (usuarios.length == 2) {
      console.log('Tenemos 2 jugadores disponibles');
      // console.log(usuarios);
      io.emit('esperarJuego', true);
    }
    socket.on('confirmado', function(value) {
      if (value) {
        confirmados++;
        console.log('Confirmado ' + confirmados);
        if (usuarios.length == confirmados) {
          console.log('Ya se puede jugar');
          io.emit('jugar', true);
        }
      }
    });

    //Detección de usuario desconectado
    socket.on('disconnect', () => {
      console.log('Se ha desconectado: ' + datos.usuario);
      for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nombre == datos.usuario) {
          usuarios.splice(i, 1);
        }
      }
      confirmados = 0;
      if (usuarios.length == 1) {
        console.log('Esperando más jugadores');
        io.emit('esperarJuego', false);
      }
      // console.log(usuarios);
    });
  });
});

server.listen(port, () => {
  console.log(`Iniciado en puerto: ${port}`);
});
