window.onload = function() {
  function ejercicio3(titulo = '') {
    /*
    apartado a
    */
    if (titulo != '') {
      document.title = titulo;
    }
    /*
    apartado b
    */
    var imagenes = document.getElementsByTagName('img');
    var escribir = document.getElementsByClassName('escribir');
    escribir[0].innerHTML += '<br/>';
    if (imagenes.length > 0)
    {
      for (var i = 0; i < imagenes.length; i++) {
        escribir[0].innerHTML += imagenes[i].alt + '<br/>';
      }
    }
    /*
    apartado c
    */
    var fechaActual = new Date();
    var minutosActuales = fechaActual.getMinutes();
    function mostrarHora() {
        var fechaTemporal = new Date();
        var segundos = fechaTemporal.getSeconds();
        var minutos = fechaTemporal.getMinutes();
        if (minutosActuales == minutos) {
            document.getElementsByClassName('hora')[0].innerHTML = '<br/> Segundos: ' + segundos;
        } else {
            minutosActuales = minutos;
            window.location = prompt('Pagina a cambiar: (incluido https://)');
        }

    }
    mostrarHora();
    setInterval(mostrarHora, 3000);
  }
  ejercicio3();

}
