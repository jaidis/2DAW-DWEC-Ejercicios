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

//Apartado 2 - 1
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    zoom: 6
  });
  var map2 = new google.maps.Map(document.getElementById('map2'), {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    zoom: 6
  });
  var infoWindow = new google.maps.InfoWindow({
    map: map
  });
  var marker = new google.maps.Marker({
    map: map2,
    draggable: true,
    position: {
      lat: -34.397,
      lng: 150.644
    }
  });

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Te encontré');
      map.setCenter(pos);
      marker.setPosition(pos);
      map2.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
}
