function anadirElemento() {
  var lista =  document.getElementsByTagName('ul');
  //console.log(lista);
  var total_elementos = document.getElementsByTagName('li');
  //console.log(total_elementos.length);
  total_elementos = total_elementos.length+1;
  var elemento = document.createElement('li');
  elemento.textContent = "Elemento "+ total_elementos;
  lista[0].appendChild(elemento);
}

//window.onload = function() {
//
//}
