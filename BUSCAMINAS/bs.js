class Buscaminas {
  constructor(tiempo = 10, dimensiones=8) {
    this.array = [];
    this.tiempo = tiempo;
    this.dimensiones = dimensiones;
    this.iniciarArray();
    this.iniciarBombas();

  }

  iniciarArray() {
    for (var i = 0; i < this.dimensiones; i++) {
      this.array.push([0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]);
    }
  }

  iniciarBombas(cantidad=10) {
    var arrayBombas = [];
    var bomba = 0;
    var fila=0;
    var columna=0;
    /*
    Genera las posiciones de las bombas y comprueba que no se repitan
    */
    for (var i = 0; i < cantidad; i++) {
      bomba = this.generarNumeroAleatorio();
      if (i > 0) {
        while (bomba == arrayBombas.filter(function(e){return e == bomba;}))
        {
          bomba = this.generarNumeroAleatorio();
          //console.log('se repite');
        }
        arrayBombas.push(bomba);
      } else {
        arrayBombas.push(bomba);
      }
    }
    console.log(arrayBombas);
    /*
    Establece las bombas en el array del juego
    */
    for (var i = 0; i < arrayBombas.length; i++) {
      //console.log(arrayBombas[i]);
      this.array[arrayBombas[i]] = [1,0];
    }
  }

  generarNumeroAleatorio() {
    return Math.floor(Math.random() * (this.dimensiones * this.dimensiones)) + 1;
  }

  iniciarIdentificarBombas() {
    console.log('To Do');
  }

  comprobarCasilla(fila=0,columna=0) {
    var casilla = (fila*columna)-1;
    console.log(this.array[casilla][0]);
  }
}
