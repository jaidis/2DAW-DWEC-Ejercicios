class Buscaminas {
  constructor(tiempo = 10, dimensiones = 8, bombas = 10) {
    this.array = [];
    this.tiempo = tiempo;
    this.dimensiones = dimensiones;
    this.bombas = bombas;
  }

  iniciarArray() {
    for (var i = 0; i < this.dimensiones; i++) {
      this.array.push([]);
    }
    for (var i = 0; i < this.array.length; i++) {
      for (var j = 0; j < this.dimensiones; j++) {
        this.array[i].push([0, 0, 0]);
      }
    }
  }

  iniciarBombas(cantidad = this.bombas) {
    var arrayBombas = [];
    var bomba = 0;
    var fila = 0;
    var columna = 0;
    //Genera las posiciones de las bombas y comprueba que no se repitan, si
    //se repiten vuelve a generar el numero de nuevo
    for (var i = 0; i < cantidad; i++) {
      bomba = this.generarNumeroAleatorio();
      if (i > 0) {
        while (bomba == arrayBombas.filter(function(e) {
            return e == bomba;
          })) {
          bomba = this.generarNumeroAleatorio();
        }
        arrayBombas.push(bomba);
      } else {
        arrayBombas.push(bomba);
      }
    }

    //Cambia el valor de las casillas que contiene la bomba
    //Se indica que tiene un valor 1 y el texto "Bomba"
    for (var i = 0; i < cantidad; i++) {
      fila = Math.floor(arrayBombas[i] / this.dimensiones);
      if (fila == this.dimensiones) {
        fila = this.dimensiones - 1;
        columna = this.dimensiones - 1;
      } else {
        columna = arrayBombas[i] % this.dimensiones;
      }
      this.array[fila][columna] = [1, '*', 0];
    }
  }

  iniciarBombasCercanas() {
    var contador = 0;
    for (var i = 0; i < this.dimensiones; i++) {
      for (var j = 0; j < this.dimensiones; j++) {
        if (this.array[i][j][0] != 1) {
          contador = this.contarBombasCercanas(i, j);
          if (contador == 0) {
            this.array[i][j][1] = '';
          } else {
            this.array[i][j][1] = this.contarBombasCercanas(i, j);
            this.array[i][j][0] = 2;
          }
        }
      }
    }
  }

  generarNumeroAleatorio() {
    return Math.floor(Math.random() * (this.dimensiones * this.dimensiones)) + 1;
  }

  contarBombasCercanas(fila, columna) {
    var contador = 0;
    if (fila > 0 && columna > 0 && this.array[fila - 1][columna - 1][0] == 1) {
      contador++;
    }
    if (fila > 0 && this.array[fila - 1][columna][0] == 1) {
      contador++;
    }
    if (fila > 0 && columna < (this.dimensiones - 1) && this.array[fila - 1][columna + 1][0] == 1) {
      contador++;
    }
    if (columna > 0 && this.array[fila][columna - 1][0] == 1) {
      contador++;
    }
    if (columna < (this.dimensiones - 1) && this.array[fila][columna + 1][0] == 1) {
      contador++;
    }
    if (fila < (this.dimensiones - 1) && columna > 0 && this.array[fila + 1][columna - 1][0] == 1) {
      contador++;
    }
    if (fila < (this.dimensiones - 1) && this.array[fila + 1][columna][0] == 1) {
      contador++;
    }
    if (fila < (this.dimensiones - 1) && columna < (this.dimensiones - 1) && this.array[fila + 1][columna + 1][0] == 1) {
      contador++;
    }
    return contador++;
  }
  jugar() {
    this.iniciarArray();
    console.log('Iniciando tablero');
    this.iniciarBombas();
    console.log('Iniciando bombas');
    this.iniciarBombasCercanas();
    console.log('Comprobando bombas cercanas');
    console.log('Ya puedes jugar');
    setTimeout(function() {
      console.log('Tiempo terminado');
      this.tiempo = 0;
    }, 30000);
  }

  comprobar(fila = 0, columna = 0) {
    fila = fila - 1;
    columna = columna - 1;
    this.comprobarRecursivo(fila, columna);
    if (this.tiempo != 0) {
      if (this.array[fila][columna][1] == '*') {
        console.log('Te has encontrado una bomba, you lose!');
        this.dibujaTablaCompleta();
      } else {
        this.comprobarRecursivo(fila, columna);
        this.dibujaTabla();
      }
    } else {
      console.log('Se te acabó el tiempo, you louse!');
      this.dibujaTablaCompleta();
    }

  }
  comprobarRecursivo(fila, columna) {
    if (fila >= 0 && fila < this.dimensiones && columna >= 0 && columna < this.dimensiones) {
      if (this.array[fila][columna][2] != 1) {
        this.array[fila][columna][2] = 1;
        var contador = this.contarBombasCercanas(fila, columna);
        if (contador == 0) {
          this.comprobarRecursivo((fila - 1), (columna - 1));
          this.comprobarRecursivo((fila - 1), columna);
          this.comprobarRecursivo((fila - 1), (columna + 1));
          this.comprobarRecursivo(fila, (columna - 1));
          this.comprobarRecursivo(fila, (columna + 1));
          this.comprobarRecursivo((fila + 1), (columna - 1));
          this.comprobarRecursivo((fila + 1), (columna));
          this.comprobarRecursivo((fila + 1), (columna + 1));
        }
      }
    }
  }
  dibujaTabla() {
    document.write('<center><table border=2>');
    document.write('<tr><td></td>');
    for (var i = 0; i < this.dimensiones; i++) {
      document.write('<td style="background-color:#999"><b>' + (i + 1) + '</b></td>');
    }
    document.write('</tr>');
    for (var i = 0; i < this.dimensiones; i++) {
      document.write('<tr><td style="background-color:#999"><b>' + (i + 1) + '</b></td>');
      for (var j = 0; j < this.dimensiones; j++) {
        if (this.array[i][j][2] == 1) {
          if (this.array[i][j][1] == '*') {
            document.write('<td style="background-color:#FEA">' + this.array[i][j][1] + '</td>');
          } else if (this.array[i][j][1] >= '1') {
            document.write('<td style="background-color:#AEF">' + this.array[i][j][1] + '</td>');
          } else {
            document.write('<td style="background-color:#AFE">' + this.array[i][j][1] + '</td>');
          }
        } else {
          document.write('<td> </td>');
        }
      }
      document.write('</tr>');
    }
    document.write('</table></center>');
  }

  comprobarCasilla(fila = 0, columna = 0) {
    if (this.array[fila - 1][columna - 1][1] == '*') {
      console.log('Has encontrado una bomba, se acaba el juego');
      this.dibujaTablaCompleta();
    } else {
      console.log(this.array[fila - 1][columna - 1][0], this.array[fila - 1][columna - 1][1], this.array[fila - 1][columna - 1][2]);
    }
  }
  dibujaTablaCompleta() {
    document.write('<center><table border=2>');
    document.write('<tr><td></td>');
    for (var i = 0; i < this.dimensiones; i++) {
      document.write('<td style="background-color:#999"><b>' + (i + 1) + '</b></td>');
    }
    document.write('</tr>');
    for (var i = 0; i < this.dimensiones; i++) {
      document.write('<tr><td style="background-color:#999"><b>' + (i + 1) + '</b></td>');
      for (var j = 0; j < this.dimensiones; j++) {
        if (this.array[i][j][1] == '*') {
          document.write('<td style="background-color:#FEA">' + this.array[i][j][1] + '</td>');
        } else if (this.array[i][j][1] >= '1') {
          document.write('<td style="background-color:#AEF">' + this.array[i][j][1] + '</td>');
        } else {
          document.write('<td style="background-color:#AFE">' + this.array[i][j][1] + '</td>');
        }
      }
      document.write('</tr>');
    }
    document.write('</table></center>');
  }

}
