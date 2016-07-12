
// Practicing some jquery

$('.submit-button').on('click', function() {
  var linkTitle = $('.title-input').val();
  $('.link-title').text(linkTitle);
  var urlTitle = $('.url-input').val();
  $('.url-title').text(urlTitle);
});
