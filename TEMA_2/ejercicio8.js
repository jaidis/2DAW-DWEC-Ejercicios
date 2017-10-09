function capturaVideo() {
  function handleVideo(stream) {
    video.src = window.URL.createObjectURL(stream);
  }

  function videoError(e) {
    alert('Se ha producido un error' + e);
  }
  var video = document.querySelector("#videoElement");
  var constraints = {
    video: true
  };

  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

  if (navigator.getUserMedia) {
    navigator.getUserMedia(constraints, handleVideo, videoError);
  }

}
function capturaAudio() {

  function audioError(e) {
    alert('Se ha producido un error' + e);
  }

  function cogeAudio(stream) {
    var microphone = context.createMediaStreamSource(stream);
    var filter = context.createBiquadFilter();
    // microphone -> filter -> destination.
    microphone.connect(filter);
    filter.connect(context.destination);
  }
  var constraints = {
    audio: true
  };
  
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  var context = new AudioContext();
  navigator.getUserMedia(constraints, cogeAudio, audioError);
}
