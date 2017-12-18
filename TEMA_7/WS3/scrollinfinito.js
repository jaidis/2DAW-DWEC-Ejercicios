window.onload = function()
{
  $('#loading').hide();
  $('ol > li:first-child').click(function(){$(this).hide()});
}

$(document).ready(function() {
	var win = $(window);

	// Each time the user scrolls
	win.scroll(function() {
		// End of the document reached?
    var booooleano = false;
		if ($(document).height() - win.height() <= win.scrollTop() +10 && booooleano == false) {
      $('#loading').show();
      booooleano = true;
      setTimeout(function() {
        $.ajax({
  				url: 'texto.txt',
  				dataType: 'html',
  				success: function(html) {
  					$('#posts').append(html);
  					$('#loading').hide();
            booooleano = false;
  				}
  			});
      }, 3000);

		}
	});
});
