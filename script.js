var titleInput = $('.title-input');
var urlInput = $('.url-input');
var submitButton =$('.submit-button');

function checkInputs() {
  if(titleInput.val()==='' || urlInput.val()==='') {
    submitButton.prop('disabled', true);
  } else {
    submitButton.prop('disabled', false);
  }
}

function disableSubmit() {
  urlInput.keyup(checkInputs);
  titleInput.keyup(checkInputs);
};

disableSubmit();

submitButton.on('click', function() {

  if (urlInput.val()==='' && titleInput.val()==='') {
    infoSection.text('Really? 🙄');
  } else if (titleInput.val()==='') {
  infoSection.text('Please enter a title for your link.');
  } else if (urlInput.val()==='') {
    infoSection.text('Please enter a valid URL.');
  } else {

// Adds Articles to List
    $('.container').append(
      '<article>' +
        '<p class="link-title">' + titleInput.val() +'</p>' +
        '<p class="url-title">' + urlInput.val() + '</p>' +
        '<div class="button-group">' +
          '<button class="read-button">Mark as Read</button>' +
          '<button class="remove-button">Remove</button>'+
        '</div>' +
      '</article>'
    );

  //Toggles Read Class when Read Button is clicked
    $('.read-button').on('click', function() {
      $(this).parent().parent().toggleClass('read');
    });
  //Removes when Remove Button is clicked
    $('.remove-button').on('click', function() {
      $(this).parent().parent().remove('article');
    });
  }
});
