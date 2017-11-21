var contador = 0;
var contenedor = "";
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
    nota = document.createElement('div');
    temp = document.createAttribute("id");
    temp.value = id;
    nota.setAttributeNode(temp);
    contenedor.appendChild(nota);
    this.id = document.getElementById(id);
    this.nuevaNota();
  }
  nuevaNota() {
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
}



window.onload = function() {
  contenedor = document.getElementById('contenedorNotas');
  var notas = new Controlador();
  notas.anadirNotas(new Nota('Prueba 1', 'El texto'));
  notas.anadirNotas(new Nota('Prueba 2', 'El texto'));
  console.log(notas.contenedorNotas);
  notas.anadirVistas(new NotaVista(notas.contenedorNotas[0].id));
  notas.anadirVistas(new NotaVista(notas.contenedorNotas[1].id));
  console.log(notas.contenedorVistas);

}
