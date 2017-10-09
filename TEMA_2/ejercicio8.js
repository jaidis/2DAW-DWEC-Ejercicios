function capturaVideo()
 {
  function handleVideo(stream) {
    video.src = window.URL.createObjectURL(stream);
  }

  function videoError(e) {
    alert('Se ha producido un error');
  }
  var video = document.querySelector("#videoElement");
  var constraints = {video: true};
  
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

  if (navigator.getUserMedia) {
    navigator.getUserMedia(constraints, handleVideo, videoError);
  }

}

function capturaAudio() {
  console.log('test');
}
