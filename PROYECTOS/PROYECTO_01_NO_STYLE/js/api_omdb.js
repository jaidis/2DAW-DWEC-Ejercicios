// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// + Iniciar variables globales
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log('Iniciando variables globales');
var apiKey = '9d074a1f';
var busqueda = '';
var jsonBusqueda = [];
var jsonPelicula = [];
var temp = '';
var contadorPaginas = 1;
var maxPagina = 100;
var contenedorPeliculas = [];

// console.log('Variables globales cargadas');

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// + Definición de clases
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class Pelicula {
  constructor(titulo = '', fecha = '', imdbID = '', poster = '') {
    this.titulo = titulo;
    this.fecha = fecha;
    this.imdbID = imdbID;
    this.poster = poster;
  }
  extendido(calificacion = '', lanzamiento ='',duracion = '', genero = '', director = '', sinopsis = '', puntuacion = '') {
    this.calificacion = calificacion;
    this.lanzamiento = lanzamiento;
    this.duracion = duracion;
    this.genero = genero;
    this.director = director;
    this.sinopsis = sinopsis;
    this.puntuacion = puntuacion;
  }
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// + Funciones
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function ajaxBusqueda(pagina = 1, tipo = 'movie') {
  // console.log('http://www.omdbapi.com/?apikey=' + apiKey + '&s=' + busqueda + '&type=movie&page=' + pagina);
  $.ajax({
      url: 'http://www.omdbapi.com/?apikey=' + apiKey + '&s=' + busqueda + '&type=movie&page=' + pagina,
      type: 'GET',
      dataType: 'json',
      success: function(response) {
        jsonBusqueda = JSON.stringify(response);
        jsonBusqueda = JSON.parse(jsonBusqueda);
        // console.log(jsonBusqueda);
      }
    })
    .done(function() {
      console.log("Busqueda Ajax Completada");
      maxPagina = parseInt((parseInt(jsonBusqueda.totalResults) / 10) + 1);
      guardaPeliculas();
    })
    .fail(function() {
      console.log("error");
    });
}

function guardaPeliculas() {
  // console.log(jsonBusqueda.Search.length);
  for (var i = 0; i < jsonBusqueda.Search.length; i++) {
    console.log(jsonBusqueda.Search[i].imdbID);
    ajaxPelicula(jsonBusqueda.Search[i].imdbID);
  }
}

function ajaxPelicula(imdbID) {
  $.ajax({
      url: 'http://www.omdbapi.com/?apikey=' + apiKey + '&i=' + imdbID + '&plot=full',
      type: 'GET',
      dataType: 'json',
      success: function(response) {
        jsonPelicula = JSON.stringify(response);
        jsonPelicula = JSON.parse(jsonPelicula);
        // console.log(jsonPelicula);
      }
    })
    .done(function() {
      console.log("Creando Objeto Pelicula");
      crearPelicula();
    })
    .fail(function() {
      console.log("Error, no se ha podido encontrar la pelicula: "+ imdbID);
    });
}

function crearPelicula() {
  if (jsonPelicula.Poster== "N/A" || !(jsonPelicula.Poster))
  {
    jsonPelicula.Poster = "img/notfound.png";
    console.log('sin foto');
  }
  temp = new Pelicula(jsonPelicula.Title,
    jsonPelicula.Year,
    jsonPelicula.imdbID,
    jsonPelicula.Poster);
  temp.extendido(jsonPelicula.Rated,
    jsonPelicula.Released,
    jsonPelicula.Runtime,
    jsonPelicula.Genre,
    jsonPelicula.Director,
    jsonPelicula.Plot,
    jsonPelicula.imdbRating)
  // console.log(temp);
  contenedorPeliculas.push(temp);
}

function maquetaPeliculas(inicio=0,fin=10)
{
  var padre = $('.muestraPeliculas');
  for (inicio; inicio<fin; inicio++)
  {
    padre.append('<div class="peliculas" id="'+contenedorPeliculas[inicio].imdbID+'" >\
    <img src="'+ contenedorPeliculas[inicio].poster+'"> \
    <h2>'+contenedorPeliculas[inicio].titulo+'</h2>\
    <p>' + contenedorPeliculas[inicio].fecha + '</p>\
    </div>');
  }
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// + Toda la magia de jQuery esta aquí
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

$(document).ready(function() {
  // console.log('Ahora carga');
  $('.busqueda').on('click', '#buscar', function(event) {
    event.preventDefault();
    busqueda = $(this).closest('.busqueda').find('input').val();
    if (!busqueda=='')
    {
      jsonBusqueda = [];
      contadorPaginas = 1;
      contenedorPeliculas = [];
      ajaxBusqueda(contadorPaginas);
      contadorPaginas++;
      $('.muestraPeliculas').empty();
      setTimeout(function() {
        maquetaPeliculas();
      }, 1500);
    }
  });
  $('.busqueda').on('click', '#mas', function(event) {
    event.preventDefault();
    if (contadorPaginas <= maxPagina) {
      ajaxBusqueda(contadorPaginas);
      contadorPaginas++;
    }
    setTimeout(function() {
      // console.log((contadorPaginas-2)*10,(contadorPaginas-1)*10);
      maquetaPeliculas((contadorPaginas-2)*10,(contadorPaginas-1)*10);
    }, 1500);
  });
});
