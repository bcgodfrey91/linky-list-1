
// Adds Articles to List

$('.submit-button').on('click', function() {
  $('.container').append('<article><p class="link-title">' + $('.title-input').val() + '</p><p class="url-title">' + $('.url-input').val() + '</p><div class="button-group"><button class="read-button">Mark as Read</button><button class="remove-button">Remove</button><div></article>');
//Toggles Read Class when Read Button is clicked
  $('.read-button').on('click', function() {
      $(this).parent().parent().toggleClass('read');
    });
//Removes when Remove Button is clicked
  $('.remove-button').on('click', function() {
      $(this).parent().parent().remove('article');
    });
  });
