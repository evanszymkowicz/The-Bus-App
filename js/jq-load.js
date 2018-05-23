$('nav a').on('click', function(e) {
  e.preventDefault();                                // Stop loading new link
  var url = this.href;

  $('nav a.current').removeClass('current');         // Clear current indicator
  $(this).addClass('current');                       // New current indicator

  $('#container').remove();
  $('#content').load(url + ' #container').hide().fadeIn('slow');
