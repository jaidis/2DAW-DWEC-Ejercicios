function creaCuadrado(id = "", size=50) {
  var tagSVG = "http://www.w3.org/2000/svg"
  var idPadre = document.getElementById(id);
  var tablero = document.createElementNS(tagSVG, "svg");
  var temp = document.createAttribute("id");
  var dimensiones = size+'px';
  var dimensionesTablero = '600px';
  temp.value = "tablero";
  tablero.setAttributeNode(temp);
  idPadre.appendChild(tablero);
  var cuadrado = document.createElementNS(tagSVG, "rect");
  temp = document.createAttribute("id");
  temp.value = "cuadrado";
  cuadrado.setAttributeNode(temp);
  tablero.appendChild(cuadrado);
  tablero.setAttribute('width', dimensionesTablero);
  tablero.setAttribute('height', dimensionesTablero);
  tablero.style.background = '#DDD';
  cuadrado = document.getElementById("cuadrado");
  cuadrado.setAttribute('width', dimensiones);
  cuadrado.setAttribute('height', dimensiones);
  cuadrado.setAttribute('x', 0);
  cuadrado.setAttribute('y', 0);
  var estilo = "fill:blue;stroke-width:1;stroke:black";
  cuadrado.setAttribute('style', estilo);
}

function animacion()
{
  var cuadrado = document.getElementById('cuadrado');
  cuadrado.innerHTML += "<animate xlink:href='#cuadrado' \
  attributeName='width' from='50px' to='350px' dur='5s' \
  begin='0s' fill='freeze' />";
  cuadrado.innerHTML += "<animate xlink:href='#cuadrado' \
  attributeName='height' from='50px' to='350px' dur='5s' \
  begin='0s' fill='freeze' />";
}

window.onload = function()
{
  console.error('Tienes un div ya preparado en la página web\
  con un id llamado "lienzo", por si quieres probarlo');
  //creaCuadrado("lienzo",100);
}
