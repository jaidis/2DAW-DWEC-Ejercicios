var xhttp;
var time = 3000;
var arrayNoticias = [];
window.onload = function() {
    setInterval(function() {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                maquetaNoticias(this);
            }
        }
        xhttp.open("GET", "datos.xml", true);
        xhttp.send();

        function maquetaNoticias(contenedorNoticias) {
            var datos = contenedorNoticias.responseXML;
            var tabla = "<table border='1'><tr><th>Titulo</th><th>Fecha</th></tr>";
            //console.log(datos);
            var lista = datos.getElementsByTagName("noticia");
            for (i = 0; i < lista.length; i++) {
                tabla += "<tr><td onclick='muestra(this)' id='" + i + "'>" +
                    lista[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +
                    "</td><td>" +
                    lista[i].getElementsByTagName("fecha")[0].childNodes[0].nodeValue +
                    "</td></tr>";
                arrayNoticias.push([lista[i].getElementsByTagName("texto")[0].childNodes[0].nodeValue,
                    lista[i].getElementsByTagName("imagen")[0].childNodes[0].nodeValue
                ]);
            }
            tabla += "</table>";
            document.getElementById("contenedor").innerHTML = tabla;
        }
    }, time);
}

function muestra(value) {
    //console.log(value.id);
    //console.log(arrayNoticias[value.id])
    var elemento = document.getElementById('lasNoticias');
    elemento.innerHTML = "<br/><img src='" + arrayNoticias[value.id][1] + "'></img><br/><br/>";
    elemento.innerHTML += arrayNoticias[value.id][0];
}