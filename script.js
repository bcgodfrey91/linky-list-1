
// Practicing some jquery

$('.submit-button').on('click', function() {


  // var linkTitle = $('.title-input').val();
  // $('.link-title').text(linkTitle);
  // var urlTitle = $('.url-input').val();
  // $('.url-title').text(urlTitle);


  $('.container').append('<article><p class="link-title">' + $('.title-input').val() + '</p><p class="url-title">' + $('.url-input').val() + '</p><div class="button-group"><button class="read-button">Mark as Read</button><button class="remove-button">Remove</button><div></article>');

});
