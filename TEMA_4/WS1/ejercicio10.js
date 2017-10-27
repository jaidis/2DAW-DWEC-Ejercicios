var clickSobreImagen = false;

function iniciar()
{
  document.getElementById("imagen").addEventListener("mousedown", cogida);
  document.getElementById("imagen2").addEventListener("mousedown", cogida);
  document.addEventListener("mousemove", mover);
  document.addEventListener("mouseup", soltar);
}


function cogida(objetoImagen) {
  clickSobreImagen = true;
}

function mover(event) {
  var objetoImagen = document.getElementById("imagen");
  var objetoImagen2 = document.getElementById("imagen2");
  var x = window.event.clientX;
  var y = window.event.clientY;
  if (clickSobreImagen) {
    objetoImagen.vspace = window.event.clientY || event.pageY;
    objetoImagen.hspace = window.event.clientX || event.pageX;
    objetoImagen2.vspace = window.event.clientY || event.pageY;
    objetoImagen2.hspace = window.event.clientX || event.pageX;
  };
};

function soltar() {
  clickSobreImagen = false;
}
