
function lanzamiento(){
  //return Math.round(Math.random() * (6 - 1) + 1);
  return Math.floor(Math.random()*6)+1;
}

function lanzamiento6000(){
  var array = [];
  var arrayValores = [0,0,0,0,0,0];
  for (var i = 0; i < 6000; i++)
  {
    //arrayValores[lanzamiento()-1]++;

    array[i] = lanzamiento();
    switch(array[i])
    {
      case 1:
        arrayValores[0]++;
        break;
      case 2:
        arrayValores[1]++;
        break;
      case 3:
        arrayValores[2]++;
        break;
      case 4:
        arrayValores[3]++;
        break;
      case 5:
        arrayValores[4]++;
        break;
      default:
        arrayValores[5]++;
        break;
    }
  }
  return arrayValores;
}

function potenciasRecursivas(base=2, exponente=2)
{
  if (exponente == 0)
  {
    return 1;
  }
  else{
    return base * potenciasRecursivas(base,--exponente);
  }
}

function factorial(valor)
{
  if (valor <= 1)
  {
    return 1;
  }
  else
  {
    return valor*factorial(--valor);
  }
}

function tablaFactorial(f=10,h=20,a=20)
{
  let contador=1;
  document.write("<table border='0' cellspading='20' bgcolor='black'>");
  while (contador <= f) {
    document.write("<tr height='" + h + "' width='" + 2 * a + "' >");
    document.write("<td bgcolor='white'>" + contador + "&nbsp;</td>");
    document.write("<td bgcolor='white'>" + factorial(contador) + "&nbsp;</td>");
    document.write('</tr>');
    contador++;
  }
  document.write('</table>');

}
