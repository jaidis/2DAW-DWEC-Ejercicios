function getPosition(event) {
	var parrafo = document.getElementById("parrafo");
    parrafo.innerHTML= "X: " + event.clientX + ", Y: " + event.clientY;
}
document.onmousemove = function (event){getPosition(event)};
