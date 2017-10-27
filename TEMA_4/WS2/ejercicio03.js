function hammerPrueba()
{
  var temporal = document.getElementById('divuno');
  temporal.innerHTML += "<br/>";
  var mc = new Hammer(temporal);
  mc.get('pan').set({
    direction: Hammer.DIRECTION_ALL
  });
  mc.on("panleft panright panup pandown tap press", function(ev) {
    if (ev.type == 'tap')
    {
      temporal.innerHTML = '';
      temporal.innerHTML = 'Arriba, abajo, izquierda, derecha';
    }
    if (ev.type == 'panleft')
    {
      temporal.innerHTML = '';
      temporal.innerHTML = '<img src="http://lorempizza.com/380/240" ></img>';
    }
    if (ev.type == 'panright')
    {
      temporal.innerHTML = '';
      temporal.innerHTML = '<img src="http://pipsum.com/380x240.jpg" ></img>';
    }
    if (ev.type == 'panup')
    {
      temporal.innerHTML = '';
      temporal.innerHTML = '<img src="https://placeimg.com/380/240/animals" ></img>';
    }
    if (ev.type == 'pandown')
    {
      temporal.innerHTML = '';
      temporal.innerHTML = '<img src="http://thecatapi.com/api/images/get?format=src&type=gif" with="380" height="240"></img>';
    }
  });
}
