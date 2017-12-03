var nombreDelUsuario;
var objetoJSON;
var xhttp;
var etiquetaNombre

function capturarNombre() {
  nombreDelUsuario = document.getElementsByTagName('input')[0].value;
}

function escribeTexto(valor) {
  etiquetaNombre = document.getElementById('escribeUsuario');
  if (valor)
    etiquetaNombre.innerHTML = ' El usuario está disponible';
  else
    etiquetaNombre.innerHTML = ' El usuario ya esta registrado';
}

function comprobarNombre() {
  var contador = 0;
  for (var i = 0; i < objetoJSON["usuarios"].length; i++) {
    //console.log(nombreDelUsuario + " " + objetoJSON["usuarios"][i]);
    if (nombreDelUsuario == objetoJSON["usuarios"][i]) {
      contador++;
      break;
    }
  }
  if (contador > 0)
    escribeTexto(false);
  else
    escribeTexto(true);
}

function compruebaUsuario() {
  capturarNombre();

  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      objetoJSON = JSON.parse(this.responseText);
      comprobarNombre();
    }
  };
  xhttp.open("GET", "getJSONFile.php", true);
  xhttp.send();
}

window.onload = function() {
  console.log('Ahora se puede cargar el codigo JS');
};
