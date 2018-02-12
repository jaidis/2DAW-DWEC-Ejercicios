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
let preguntas = [
  {
    id: '1',
    pregunta: '¿Cúanto es 4+4?',
    correcta: 'a',
    a: '8',
    b: '4',
    c: 'Depende del día',
    d: '0'
  }, {
    id: '2',
    pregunta: '¿De qué color es cielo?',
    correcta: 'b',
    a: 'Blanco',
    b: 'Azul',
    c: 'Gris',
    d: 'Negro'
  }, {
    id: '3',
    pregunta: '¿Fino es maricón?',
    correcta: 'c',
    a: '¿Quién es Fino?',
    b: 'No',
    c: 'Sí',
    d: '¿Lo eres Tú, pirata?'
  }, {
    id: '4',
    pregunta: '¿Cómo se llama el coche del Moi?',
    correcta: 'd',
    a: 'Pathfinder',
    b: 'Todoterreno',
    c: 'El bicho pa ir a por aceituna',
    d: 'Cañonero'
  }, {
    id: '5',
    pregunta: '¿Dónde está el verdadero Pablo Prieto?',
    correcta: 'a',
    a: 'Muerto',
    b: 'Se lo comió el perro',
    c: 'En la playa',
    d: 'En Irlanda evadiendo impuestos'
  }
];

//Detección de eventos
io.on('connection', (socket) => {
  console.log('Se ha iniciado una nueva conexión');
  socket.on('new-usuario', (datos) => {
    console.log('Usuario Identificado: ' + datos.usuario);
    usuarios.push({nombre: datos.usuario, puntuacion: 0});
    socket.join(datos.sala);
    var confirmado = 0;
    var habitacion = io.sockets.adapter.rooms[datos.sala];
    // console.log('Habitantes de '+ datos.sala + ': '+ habitacion.length);
    console.log(usuarios);
    if (habitacion.length == 2) {
      console.log('Tenemos 2 jugadores disponibles en sala: ' + datos.sala);
      // console.log(usuarios);
      io.to(datos.sala).emit('esperarJuego', true);
    }

    socket.on('confirmado', function(value) {
      if (value) {
        // console.log(datos.sala);
        confirmado++
        // console.log('Confirmado ' + confirmado);
        if (confirmado >= 1) {
          console.log('Ya se puede jugar en la Sala: ' + datos.sala);
          io.to(datos.sala).emit('jugar', true);
        }
      }
    });

    socket.on('pregunta', function(datos) {
      console.log('Pregunta ' + datos);
      socket.emit('nPregunta', preguntas[datos]);
    });

    //Detección de usuario desconectado
    socket.on('disconnect', () => {
      console.log('Se ha desconectado: ' + datos.usuario);
      socket.leave(datos.sala);
      for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nombre == datos.usuario) {
          usuarios.splice(i, 1);
        }
      }
      confirmado = 0;
      if (habitacion.length == 1) {
        console.log('Esperando más jugadores');
        io.to(datos.sala).emit('esperarJuego', false);
      }
      // console.log(usuarios);
    });
  });
});

server.listen(port, () => {
  console.log(`Iniciado en puerto: ${port}`);
});
