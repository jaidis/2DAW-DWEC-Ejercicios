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
    zoom: 15
  });
  var map2 = new google.maps.Map(document.getElementById('map2'), {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    zoom: 15
  });
  var map3 = new google.maps.Map(document.getElementById('map3'), {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    zoom: 15
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
  var marker2 = new google.maps.Marker({
    map: map3,
    draggable: true,
    position: {
      lat: -34.397,
      lng: 150.644
    }
  });
  var geocoder = new google.maps.Geocoder;
  var infoWindow2 = new google.maps.InfoWindow({
    map: map3
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
      geocoder.geocode({'location': pos}, function(results, status) {
          if (status === 'OK') {
            if (results[1]) {
              map3.setZoom(16);
              infoWindow2.setContent(results[0].formatted_address);
              infoWindow2.open(map3, marker2);
              marker2.setPosition(pos);
              map3.setCenter(pos);

            } else {
              window.alert('No results found');
            }
          } else {
            window.alert('Geocoder failed due to: ' + status);
          }
        });

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
