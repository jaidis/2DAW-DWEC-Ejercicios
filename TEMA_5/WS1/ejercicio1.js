window.onload = function()
{
  var enlaces = document.getElementsByTagName('a');
  var escribir = document.getElementsByClassName('escribir');
  escribir[0].innerHTML = "Enlaces de la pagina web: " + enlaces.length + "<br/>";
  escribir[0].innerHTML += "Enlace del penúltimo enlace: "+ enlaces[enlaces.length-2].href +" <br/>";
  var cont = 0;
  for (var i=0; i<enlaces.length; i++)
  {
    //console.log(enlaces[i].href);
    if (enlaces[i].href == "http://www.google.es/")
    {
      cont++;
    }
  }
  escribir[0].innerHTML += "Número de enlaces que apuntan a google: "+ cont +" <br/>";
  var parrafos = document.getElementsByTagName('p');
  escribir[0].innerHTML += "Número de enlaces del tercer parrafo: "+ parrafos[2].getElementsByTagName('a').length +" <br/>";
  //console.log(parrafos[2].getElementsByTagName('a').length);
}
