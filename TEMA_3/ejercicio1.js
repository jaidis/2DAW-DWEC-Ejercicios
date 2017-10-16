
function lanzamiento(){
  return Math.round(Math.random() * (6 - 1) + 1);
}

function lanzamiento6000(){
  var array = [];
  var arrayValores = [0,0,0,0,0,0];
  for (var i = 0; i < 6000; i++)
  {
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
  if (valor == 0)
  {
    return 1;
  }
  else
  {
    return valor*factorial(--valor);
  }
}
