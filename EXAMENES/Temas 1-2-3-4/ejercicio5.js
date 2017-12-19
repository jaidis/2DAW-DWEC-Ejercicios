  function cambiaTexto(event) {
    var x = event.which || event.keyCode;
    if (x == 13)
    {
      document.getElementById("caja").value = "";
      document.getElementById("escribir").innerHTML = "";
    }
    else{
      document.getElementById("escribir").innerHTML = "escribiendo...";
      setTimeout(function() {
        document.getElementById("escribir").innerHTML = "";
      }, 3000);
    }

  }
