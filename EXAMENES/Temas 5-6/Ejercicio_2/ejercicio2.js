console.error('La web ya tiene creado un div para los \
enlaces llamado "contenedor"');

var enlaces = [];

function creaEnlace(url = "", texto = "", nodo = "") {
  var temp = document.getElementById(nodo);
  var enlace = document.createElement('a');
  enlace.href = url;
  enlace.innerHTML = texto;
  temp.appendChild(enlace);
  temp.innerHTML += '<br/>';
  enlaces.push([url, texto]);
  localStorage.contenedorEnlaces = JSON.stringify(enlaces);
}

function borrar() {
  localStorage.removeItem('contenedorEnlaces');
  console.log('Se ha borrado la BD local');
}

function asociaEventos() {
    for (var i = 0; i < document.getElementsByTagName("a").length; i++) {
        var a = document.getElementsByTagName("a")[i];
        a.setAttribute('onMouseOver', "mouseOver(this)");
        a.setAttribute('onMouseOut', "mouseOut(this)");
    }
}

function mouseOver(a) {
    a.style.background = "red";
}

function mouseOut(a) {
    a.style.background = "white";
}

window.onload = function() {
  if (localStorage.contenedorEnlaces != undefined) {
    console.log('El almacenamiento local contiene datos, recuperando los datos');
    var temp = JSON.parse(localStorage.contenedorEnlaces);
    for (var i = 0; i < temp.length; i++) {
      creaEnlace(temp[i][0], temp[i][1], "contenedor");
    }
    console.log('Se han recuperado ' + temp.length + ' enlaces');
  }
}
