var promesaBuena;

window.onload = function() {
  promesaBuena = new Promise(function(resolve, reject) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        resolve("El archivo es bueno");
      }
      if (this.status == 404) {
        reject("No encontrado");
      }
    };
    xhttp.open("GET", "infos.txt", true);
    xhttp.send();
  });
  promesaBuena.then(function(params) {
    console.log(params);
  }).catch(function(error) {
    console.log(error);
  })

}
