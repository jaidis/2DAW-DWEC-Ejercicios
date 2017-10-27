function pintarTabla() {
  document.close();
  document.write("<table border='5' cellspacing='0' align='center'>");
  for (var i = 0; i <= 25; i++) {
    document.write("<tr bgcolor='#FFFFFF' height='20'>");
    for (var j = 0; j <= 25; j++) {
      document.write("<td onmousemove='cambiarColor(this)' align='center' width='20' height='20'></td>");
    };
  };
  document.write("</tr>");
  document.write("</table>");
  document.write('<br/><center><button onclick="borrarTabla()" type="button" name="borrar">Borrar Tabla</button> </center>');
};

function cambiarColor(valor) {
  if (event.shiftKey == true) {
    valor.style.backgroundColor = "Pink";
  } else if (event.ctrlKey == true) {
    valor.style.backgroundColor = "Yellow";
  }
  else if(event.altKey==true)
  {
    valor.style.backgroundColor = "White";
  }
}

function borrarTabla(){
  pintarTabla();
}
