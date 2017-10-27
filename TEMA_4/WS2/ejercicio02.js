function getPosition(event) {
	var parrafo = document.getElementById("parrafo");
		parrafo.innerHTML = "";
		for (i = 0; i< event.touches.length; i++)
		{
			parrafo.innerHTML+= "X: " + event.touches[i].clientX + ", Y: " + event.touches[i].clientY + '<br/>';
		}
}
document.ontouchstart = function (event){getPosition(event)};
