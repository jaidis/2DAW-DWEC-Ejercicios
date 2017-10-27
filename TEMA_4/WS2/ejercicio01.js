function getPosition(event) {
	var parrafo = document.getElementById("parrafo");
    parrafo.innerHTML= "X: " + event.touches[0].clientX + ", Y: " + event.touches[0].clientY;
}
document.ontouchstart = function (event){getPosition(event)};
