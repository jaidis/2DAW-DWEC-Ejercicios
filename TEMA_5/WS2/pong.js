//Objetos

// class Bola {
//   constructor(posX = 0, posY = 0, radio = 0) {
//     this.posX = posX;
//     this.posY = posY;
//     this.radio = radio;
//   }
//
//   cambiarX(posX = 0) {
//     this.posX = posX;
//   }
//   cambiarY(posY = 0) {
//     this.posY = posY;
//   }
//   cambiarRadio(radio = 0) {
//     this.radio = radio;
//   }
// }
//
// class Rectangulo {
//   constructor(ancho = 0, alto = 0) {
//     this.ancho = ancho;
//     this.alto = alto;
//   }
//
//   cambiarAncho(ancho = 0) {
//     this.ancho = ancho;
//   }
//
//   cambiarAlto(alto = 0) {
//     this.alto = alto;
//   }
//
//   cambiarColor(color) {
//     this.color = color;
//   }
// }
//
// class Tablero {
//   constructor(ancho = 0, alto = 0) {
//     this.ancho = ancho;
//     this.alto = alto;
//   }
// }

// Vista

class BolaVista {
  constructor(id = "", cx = 0, cy = 0, radio = 0, color = "") {
    this.id = document.getElementById(id);
    this.id.setAttribute('fill', color);
    this.id.setAttribute('cx', cx);
    this.id.setAttribute('cy', cy);
    this.id.setAttribute('r', radio);
    this.margenX = radio;
    this.margenY = radio;
  }
  cambiarX(cx = 0) {
    this.id.setAttribute('cx', cx + this.margenX);
  }
  cambiarY(cy = 0) {
    this.id.setAttribute('cy', cy + this.margenY);
  }

}


class RectanguloVista {
  constructor(id = "", ancho = 0, alto = 0, posicionX = 0, posicionY = 0, color = "") {
    this.id = document.getElementById(id);
    this.id.setAttribute('width', ancho);
    this.id.setAttribute('height', alto);
    this.id.setAttribute('x', posicionX);
    this.id.setAttribute('y', posicionY);
    let estilo = "fill:" + color + ";stroke-width:1;stroke:black";
    this.id.setAttribute('style', estilo);
    this.alto = parseInt(this.id.getAttribute('height'));
  }
  cambiarY(posicionY) {
    this.id.setAttribute('y', posicionY);
  }
  cambiarX(posicionX) {
    this.id.setAttribute('x', posicionX);
  }
}

class TableroVista {
  constructor(id = "", ancho = 0, alto = 0) {
    this.id = document.getElementById(id);
    this.id.style.width = ancho + 'px';
    this.id.style.height = alto + 'px';
    this.id.style.backgroundColor = "#AFAFAF";
    this.id.style.border = "thin dotted red";
    this.id.setAttribute('width', ancho + 'px');
    this.id.setAttribute('height', alto + 'px');
    this.alto = parseInt(this.id.getAttribute('height'));
    this.ancho = parseInt(this.id.getAttribute('width'));
  }

}

class Juego {
  constructor(id = "") {
    var temp = ""
    var tagSVG = "http://www.w3.org/2000/svg"
    //Crear la etiqueta SVG
    this.id = document.getElementById(id);
    var tablero = document.createElementNS(tagSVG, "svg");
    temp = document.createAttribute("id");
    temp.value = "tablero";
    tablero.setAttributeNode(temp);
    this.id.appendChild(tablero);
    this.tablero = new TableroVista("tablero", 1024, 768);
    // Crear los rectangulos
    var rectanguloIzquierda = document.createElementNS(tagSVG, "rect");
    temp = document.createAttribute("id");
    temp.value = "rectanguloIzquierda";
    rectanguloIzquierda.setAttributeNode(temp);
    this.tablero.id.appendChild(rectanguloIzquierda);
    this.rectIzq = new RectanguloVista(temp.value, 20, 250, 4, 200, "blue");
    var rectanguloDerecha = document.createElementNS(tagSVG, "rect");
    temp = document.createAttribute("id");
    temp.value = "rectanguloDerecha";
    rectanguloDerecha.setAttributeNode(temp);
    this.tablero.id.appendChild(rectanguloDerecha);
    this.rectDer = new RectanguloVista(temp.value, 20, 250, 1000, 200, "green");
    //Crear la bola
    var bola = document.createElementNS(tagSVG, "circle");
    temp = document.createAttribute("id");
    temp.value = "bola";
    bola.setAttributeNode(temp);
    this.tablero.id.appendChild(bola);
    this.bola = new BolaVista(temp.value, 500, 375, 20, "red");

  }

  moverRectanguloIzquierdo(valor) {
    if (valor > 0 && (this.tablero.alto - this.rectIzq.alto) > valor) {
      this.rectIzq.cambiarY(valor);
    }

  }

  moverRectanguloDerecho(valor) {
    if (valor > 0 && (this.tablero.alto - this.rectDer.alto) > valor) {
      this.rectDer.cambiarY(valor);
    }
  }

  moverRectangulos() {
    document.addEventListener('keypress', function(e) {
      //decrementar rectangulo 1 tecla W
      if (e.keyCode == 119) {
        this.moverRectanguloIzquierdo(100);
      }
      //incrementar rectangulo 1 tecla S
      if (e.keyCode == 115) {
        this.moverRectanguloIzquierdo(100);
      }
      //decrementar rectangulo 2 tecla O
      if (e.keyCode == 111) {
        this.moverRectanguloDerecho(100);
      }
      //incrementar rectangulo 2 tecla L
      if (e.keyCode == 108) {
        this.moverRectanguloDerecho(100);
      }
    }, false);
  }
}

window.onload = function() {
  console.log('carga');
  var juego = new Juego("pong");
  juego.moverRectangulos();
  //setInterval(juego.moverRectangulos, 10);
  juego.moverRectanguloIzquierdo(517);
  juego.moverRectanguloDerecho(1);
}
