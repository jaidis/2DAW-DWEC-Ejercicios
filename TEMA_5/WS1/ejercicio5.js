function nuevoArchivo() {
  var ultimoElemento = document.getElementsByTagName('form');
  var etiqueta = document.createElement('label');
  etiqueta.innerHTML = 'A continuación puedes subir aquí un archivo<br/>\
  <input type="file" name="" value=""> \
  <button type="button" name="button">Enviar</button><br/><br/>';
  ultimoElemento[0].appendChild(etiqueta);
}

//window.onload = function() {
//
//}
