var arrayImagenes = [];
var contador = 0;

function imagenAnterior() {
  var imagenes = document.getElementsByTagName('img');
  console.log(imagenes);
  contador--;
  if (contador < 0) {
    contador = 0;
  }
  imagenes[0].src = arrayImagenes[contador];
}

function imagenPosterior() {
  var imagenes = document.getElementsByTagName('img');
  console.log(imagenes);
  contador++;
  if (contador > arrayImagenes.length - 1) {
    contador = arrayImagenes.length - 1;
  }
  imagenes[0].src = arrayImagenes[contador];

}

window.onload = function() {
  arrayImagenes = ["http://lorempizza.com/400/400", "http://placeimg.com/400/400/animals", "http://placeimg.com/400/400/nature", "http://placeimg.com/400/400/people", "https://loremflickr.com/400/400/cat"];
  //console.log(arrayImagenes);
}
