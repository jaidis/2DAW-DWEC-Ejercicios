

function testGeolocation() {
  if ("geolocation" in navigator) {
    document.write('La geolocalización esta disponible en el navegador <br/>');
  } else {
    document.write('La geolocalización no esta disponible en el navegador <br/>');
  }
}

function posicionActual() {
  var output = document.getElementById("out-2");

  if (!navigator.geolocation) {
    output.innerHTML = "<p>La geolocalización esta disponible en el navegador</p>";
    return;
  }

  function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
  }

  function error() {
    output.innerHTML = "La geolocalización no esta disponible en el navegador <br/>";
  }
  output.innerHTML = "<p>Cargando…</p>";
  navigator.geolocation.getCurrentPosition(success, error);
}

function posicionActualDos() {
  var output = document.getElementById("out-3");

  if (!navigator.geolocation) {
    output.innerHTML = "<p>La geolocalización esta disponible en el navegador</p>";
    return;
  }

  function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

  }

  function error() {
    output.innerHTML = "La geolocalización no esta disponible en el navegador <br/>";
  }
  output.innerHTML = "<p>Cargando…</p>";
  navigator.geolocation.getCurrentPosition(success, error);
}
