function apartadoA(array) {
  return array.sort(function(a, b) {return a - b;}).pop();
}

function apartadoB(array) {
  return array.sort(function(a, b) {return a.length - b.length;}).pop();
}

function apartadoC(array) {
  return array.filter(function(value) {return value%2==0;}).sort(function(a, b) {return a - b;});
}

function apartadoD(array) {
  return array.filter(function(value) {return value%2!=0;}).sort(function(a, b) {return a - b;});
}

function apartadoE(array){
  return array.filter(function(value) {return value.includes('is')});
}

function apartadoF(array) {
  return array.filter(function(value) {return value%3==0;}).sort(function(a, b) {return a - b;});
}

function apartadoG(array_1,array_2)
{
  return array_1.concat(array_2);
}

function apartadoH(array_1,array_2){
  return array_1.concat(array_2).sort(function(a, b) {return a - b;})
}

function apartadoI(array)
{
  array.splice(0,1);
}

function apartadoJ(array,valor)
{
  array.unshift(valor);
}
