function cambiarContenido() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      window.location = this.responseText;
    }
  };
  xhttp.open("GET", "info.txt", true);
  xhttp.send();
}
