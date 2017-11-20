class Nota {
  constructor(titulo="", texto="", hora="") {
    this.titulo = titulo;
    this.texto = texto;
    this.hora = hora;
  }
}

class NotaVista {
  constructor(id="") {
    this.id=id;
  }
}

class Controlador {
  constructor() {
    this.contenedor = [];
  }
}
