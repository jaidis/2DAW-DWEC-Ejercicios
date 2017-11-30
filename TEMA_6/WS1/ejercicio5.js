var xhttp;
var time = 5000;
window.onload = function() {
  setInterval(function() {
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        maquetaCorreos(this);
      }
    };

    xhttp.open("GET", "correos.xml", true);
    xhttp.send();
    function maquetaCorreos(xml) {
      var i;
      var xmlDoc = xml.responseXML;
      var table = '<table border=1><tr><th>Remitente</th><th>Destinatario</th><th>Asunto</th><th>Mensaje</th></tr>';
      var x = xmlDoc.getElementsByTagName("correo");
      for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
          x[i].getElementsByTagName("remitente")[0].childNodes[0].nodeValue +
          "</td><td>" +
          x[i].getElementsByTagName("destinatario")[0].childNodes[0].nodeValue +
          "</td><td>" +
          x[i].getElementsByTagName("asunto")[0].childNodes[0].nodeValue +
          "</td><td>" +
          x[i].getElementsByTagName("mensaje")[0].childNodes[0].nodeValue +
          "</td></tr>";
      }
      table+="</table>";
      document.getElementById("tabla").innerHTML = table;
    }
  }, time);
}
