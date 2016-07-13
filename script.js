
// Practicing some jquery

$('.submit-button').on('click', function() {
  $('.container').append('<article><p class="link-title">' + $('.title-input').val() + '</p><p class="url-title">' + $('.url-input').val() + '</p><div class="button-group"><button class="read-button">Mark as Read</button><button class="remove-button">Remove</button><div></article>');

  $('.read-button').on('click', function() {
      $(this).parent().parent().toggleClass('read');
    });
  });
