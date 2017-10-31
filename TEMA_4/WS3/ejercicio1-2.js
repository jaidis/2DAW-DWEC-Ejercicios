window.onload = function() {
  document.getElementById("tema_normal").addEventListener("click", temaNormal);
  document.getElementById("tema_minimalista").addEventListener("click", temaMinimalista);
}

function temaNormal() {
  document.getElementById("estilo").href = "tema_normal.css";
}

function temaMinimalista() {
  document.getElementById("estilo").href = "tema_minimalista.css";
}
