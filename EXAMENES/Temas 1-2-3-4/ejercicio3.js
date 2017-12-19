window.onload = function() {
  /*
  apartado a
  */
  class Gato {
    constructor(nombre = '', edad = 0, tamano = 0, raza = '') {
      this.nombre = nombre;
      this.edad = edad;
      this.tamano = tamano;
      this.raza = raza;
    }

    caracteristicas() {
      return 'Me llamo ' + this.nombre + ', tengo ' + this.edad + ' años, mido ' + this.tamano + ' cm y soy un ' + this.raza;
    }

  }

  /*
  apartado b
  */

  class JaulaGatitos {
    constructor() {
      this.array = [];
    }

    anadirGato(objetoGato) {
      this.array.push(objetoGato);
    }

    buscarGato(nombreGato) {
      var encontrado = false;
      var posicion = 0;
      for (var i = 0; i < this.array.length; i++) {
        if (this.array[i].nombre === nombreGato) {
          encontrado = true;
          posicion = i;
        }
      }
      if (encontrado) {
        return this.array[posicion].caracteristicas();
      } else {
        return 'No se encuentra el gato';
      }
    }

    mostrarGatos() {
      var totalGatos = 'Total de Gatos ' + this.array.length + ';';
      for (var i = 0; i < this.array.length; i++) {
        totalGatos += this.array[i].caracteristicas() + ';';
      }
      return totalGatos;
    }
  }

  /*
  Prueba de concepto, aqui pruebo que funciona todo bien
  */
  /*
    var gatoPrueba1 = new Gato("misifu", 2, 24, "siames");
    console.log(gatoPrueba1.caracteristicas());
    var gatoPrueba2 = new Gato("fede", 3, 25, "nisupu");
    console.log(gatoPrueba2.caracteristicas());
    var caja = new JaulaGatitos();
    caja.anadirGato(gatoPrueba1);
    caja.anadirGato(gatoPrueba2);
    console.log(caja.buscarGato("misifu"));
    console.log(caja.mostrarGatos());
  */
}
