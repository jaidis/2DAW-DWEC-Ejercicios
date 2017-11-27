var contador = 0;
var contenedor = "";
var notas = "";
class Nota {
  constructor(titulo = "", texto = "") {
    this.id = "nota" + (++contador);
    this.titulo = titulo;
    this.texto = texto;
    this.hora = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
  }
}


class NotaVista {
  constructor(id = "") {
    var temp = "";
    var nota = "";
    // Crear el elemento Nota
    nota = document.createElement('div');
    temp = document.createAttribute("id");
    temp.value = id;
    nota.setAttributeNode(temp);
    contenedor.appendChild(nota);
    this.id = document.getElementById(id);
    // Crear elementos de la nota
    temp = document.createElement("p");
    temp.textContent = "Titulo";
    this.id.appendChild(temp);
    temp = document.createElement("p");
    temp.textContent = "Cuerpo";
    this.id.appendChild(temp);
    temp = document.createElement("p");
    temp.textContent = "Hora";
    this.id.appendChild(temp);
    this.parrafos = this.id.getElementsByTagName('p');
    this.aplicarEstilo();
  }
  aplicarEstilo() {
    this.id.style.backgroundColor = "#ffd60a";
    this.id.style.cssFloat = "left";
    this.id.style.width = "300px";
    this.id.style.height = "300px";
    this.id.style.border = "solid black";
    this.id.style.margin = "5px";

  }
}

class Controlador {
  constructor() {
    this.contenedorNotas = [];
    this.contenedorVistas = [];
  }
  anadirNotas(objetoNota = "") {
    this.contenedorNotas.push(objetoNota);
  }
  anadirVistas(objetoVista = "") {
    this.contenedorVistas.push(objetoVista);
  }
  construirNota(objetoNota = "") {
    for (var i = 0; i < this.contenedorVistas.length; i++) {
      if (this.contenedorVistas[i].id.id == objetoNota.id) {
        this.contenedorVistas[i].parrafos[0].textContent = objetoNota.titulo;
        this.contenedorVistas[i].parrafos[1].textContent = objetoNota.texto;
        this.contenedorVistas[i].parrafos[2].textContent = objetoNota.hora;
      }
    }
  }
}



window.onload = function() {
  contenedor = document.getElementById('contenedorNotas');
  notas = new Controlador();

  if (localStorage.contenedorDatos != undefined) {
    console.log('El almacenamiento local contiene datos, recuperando los datos');
    var temp = JSON.parse(localStorage.contenedorDatos);
    notas.contenedorNotas = temp.contenedorNotas;
    notas.contenedorVistas = temp.contenedorVistas;
    console.log(notas.contenedorNotas);
    console.log(notas.contenedorVistas);
    for (var i=0; i < notas.contenedorNotas.length;i++)
    {
      notas.anadirVistas(new NotaVista(notas.contenedorNotas[i].id))
      notas.construirNota(notas.contenedorNotas[i]);
    }
    console.log('Se borra el almacenamiento local');
    localStorage.removeItem('contenedorDatos');
  } else {
    notas.anadirNotas(new Nota('Prueba 1', 'El texto'));
    notas.anadirNotas(new Nota('Prueba 2', 'El texto'));
    notas.anadirVistas(new NotaVista(notas.contenedorNotas[0].id));
    notas.construirNota(notas.contenedorNotas[0]);
    notas.anadirVistas(new NotaVista(notas.contenedorNotas[1].id));
    notas.construirNota(notas.contenedorNotas[1]);
    console.log(notas.contenedorNotas);
    console.log(notas.contenedorVistas);
    localStorage.contenedorDatos = JSON.stringify(notas);
    console.log('La tercera nota no se almacena, así cuando se '+
    'recupere los datos solo se recuperan las 2 primeras notas');
    notas.anadirNotas(new Nota('Prueba 3', 'El texto'));
    notas.anadirVistas(new NotaVista(notas.contenedorNotas[2].id));
    notas.construirNota(notas.contenedorNotas[2]);
  }
}
