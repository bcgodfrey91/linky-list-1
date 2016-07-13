var titleInput = $('.title-input');
var urlInput = $('.url-input');
var submitButton =$('.submit-button');

function disableSubmit() {
  urlInput.keyup(function() {
    if($(this).val()==='') {
      submitButton.prop('disabled', true);
    } else {
      submitButton.prop('disabled', false);
    }
  })
};

disableSubmit();


$('.submit-button').on('click', function() {
  // Return error messages
  var infoSection = $('.info');
  var titleInput = $('.title-input');
  var urlInput = $('.url-input');

  if(urlInput.val()==='' && titleInput.val()==='') {
    infoSection.text('Really? 🙄');
  } else if(titleInput.val()==='') {
  infoSection.text('Please enter a title for your link.');
} else if(urlInput.val()==='') {
  infoSection.text('Please enter a valid URL.');
} else {

// Adds Articles to List
  $('.container').append('<article><p class="link-title">' +
  $('.title-input').val() +
  '</p><p class="url-title">' +
  $('.url-input').val() +
  '</p><div class="button-group"><button class="read-button">Mark as Read</button><button class="remove-button">Remove</button></div></article>');
//Toggles Read Class when Read Button is clicked
  $('.read-button').on('click', function() {
      $(this).parent().parent().toggleClass('read');
    });
//Removes when Remove Button is clicked
  $('.remove-button').on('click', function() {
      $(this).parent().parent().remove('article');
    });}
  });

// if (titleInput.value='') {
//   infoSection.innerText = 'Please enter a title for your link.';
// } else if (userInput.value='') {
//   infoSection.innerText = 'Please enter a valid URL.';
// };
