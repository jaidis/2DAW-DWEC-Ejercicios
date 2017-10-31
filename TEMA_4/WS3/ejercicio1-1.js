window.onload = function (){
var t_normal = document.getElementById("tema_normal");
var t_minimalista = document.getElementById("tema_minimalista");
t_normal.addEventListener("click",temaNormal);
t_minimalista.addEventListener("click",temaMinimalista);
temaMinimalista();
}

function temaNormal()
{
  document.getElementById("barra_lateral").style.display="block";
  document.getElementById("barra_lateral").style.minWidth="10%";
  document.getElementById("barra_lateral").style.height="100%";
  document.body.style.height="100%";
  document.getElementsByTagName("html")[0].style.height = "100%";
  document.body.style.padding="0px";
  document.body.style.margin="0px";
  document.getElementById("barra_lateral").style.backgroundColor="lightblue";
  document.getElementById("barra_lateral").style.float="left";
  document.getElementById("cuerpo").style.marginLeft="20px";
  document.getElementById("cuerpo").style.marginTop="10px";
  document.getElementById("cuerpo").style.width="80%";
  document.getElementById("cuerpo").style.float="left";
  document.body.style.backgroundColor = "#fcf7b0";
  document.body.style.fontFamily = "arial";
  var enlaces = document.getElementById("menu");
  enlaces.style.borderTop = "1px solid #76a7fc";
  enlaces.style.borderLeft = "1px solid #76a7fc";
  enlaces.style.borderRight = "1px solid blue";
  enlaces.style.borderBottom = "1px solid blue";
  enlaces.style.backgroundColor = "#bcd5ff";
  var links = document.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++){
      links[i].style.textDecoration="none";
      links[i].style.padding="1px";
      links[i].style.fontWeight="bold";
  }
  document.getElementsByTagName("h1")[0].style.color="#001438";
  document.getElementById("parrafo_oculto").style.fontWeight="bold";
  document.getElementById("parrafo_oculto").style.display="block";
  document.getElementById("footer").style.border="1px solid black";
  document.getElementById("footer").style.backgroundColor="yellow";
  document.getElementById("footer").style.padding="5px";
}

function temaMinimalista()
{
  document.getElementById("barra_lateral").style.display="none";
  document.getElementById("barra_lateral").style.minWidth="0px";
  document.getElementById("barra_lateral").style.backgroundColor="";
  document.getElementById("cuerpo").style.margin="0px";
  document.body.style.backgroundColor = "white";
  document.body.style.fontFamily = "Sans Serif";
  var enlaces = document.getElementById("menu");
  enlaces.style.border = "";
  enlaces.style.backgroundColor = "";
  var links = document.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++){
      links[i].style.textDecoration="none";
      links[i].style.padding="1px";
      links[i].style.fontWeight="bold";
  }
  document.getElementsByTagName("h1")[0].style.color="black";
  document.getElementById("parrafo_oculto").style.fontWeight="";
  document.getElementById("parrafo_oculto").style.display="none";
  document.getElementById("footer").style.border="";
  document.getElementById("footer").style.backgroundColor="";
  document.getElementById("footer").style.padding="";
}
