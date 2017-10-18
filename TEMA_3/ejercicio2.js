/*
Apartado 5
*/
function paresImpares() {
  var array = [];
  for (var i = 0; i < 100; i++) {
    array[i] = Math.floor(Math.random() * 1000) + 1;
  }
  document.write(array + '<br/>');
  var pares = array.filter(function(valor) {
    return valor % 2 == 0
  });
  var impares = array.filter(function(valor) {
    return valor % 2 == 1
  });
  pares = pares.sort();
  impares = impares.sort();
  document.write(pares + '<br/>');
  document.write(impares + '<br/>');
  document.write(pares.concat(impares) + '<br/>');
}

/*
Apartado 7
*/
function iniciaArray(array) {
  //return array.fill(0,0,9);
  return array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

function sumaUno(array) {
  for (var i = 0; i < array.length; i++) {
    array[i]++;
  }
  return array;
}

function arrayEspacios(array) {
  var x = '';
  for (var i = 0; i < array.length; i++) {
    x = x.concat(array[i] + ' ');
  }
  return x;
}

/*
Apartado 8
*/
function valorDelDado() {
  return Math.floor(Math.random() * 6) + 1;
}

function sumaDados(tiradas = 36000) {
  var arrayTemporal = [];
  for (var i = 0; i < tiradas; i++) {
    arrayTemporal.push(valorDelDado() + valorDelDado());
  }
  return arrayTemporal;
}

function apartadoOcho() {
  var arraySumaTiradas = sumaDados();
  for (var val = 2; val < 13; val++) {
    document.write('Tiradas con valores ' + val + ' => ' + arraySumaTiradas.filter(function(value) {
      return value == val;
    }).length + '<br/>')
  }
}


/*
Apartado 9
*/

function sumaRestaMultiDiviDados(tiradas = 36000) {
  var arrayTemporal = [];
  var dadoUno = 0;
  var dadoDos = 0;

  for (var i = 0; i < tiradas; i++) {
    dadoUno = valorDelDado();
    dadoDos = valorDelDado();
    arrayTemporal.push([dadoUno, dadoDos, dadoUno + dadoDos, dadoUno - dadoDos, dadoUno * dadoDos, (Math.floor(dadoUno / dadoDos) + 1)]);
  }
  return arrayTemporal;
}

function apartadoNueve()
{
  var dados = sumaRestaMultiDiviDados();
  document.write("<table border=1>");
    document.write("<tr><td>Dado 1</td><td>Dado 2</td><td>+</td><td>-</td><td>*</td><td>/</td></tr>");
    for (let i = 0; i < dados.length; i++) {
      document.write("<tr>");
      for (let z = 0; z < dados[i].length; z++) {
        document.write("<td>" + dados[i][z] + "</td>");
      }
      document.write("</tr>");
    }
    document.write("</table>");
}
