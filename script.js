var titleInput = $('.title-input');
var urlInput = $('.url-input');
var submitButton =$('.submit-button');
var counter = 0;

// Disable Submit Button
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

// Link Counter

function countLinks() {
  counter++;
  $('.link-counter').text('Number of Links: ' + counter);
}

function removeLinks() {
  counter--;
  $('.link-counter').text('Number of Links: ' + (counter));
}

// Submit Button Functions

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

countLinks();
  //Toggles Read Class when Read Button is clicked
    $('.read-button').on('click', function() {
      $(this).parent().parent().toggleClass('read');
    });
  }
});

// Removes when Remove Button is clicked
$('.container').on('click', '.remove-button', function() {
  $(this).parent().parent().remove('article');
  removeLinks();
});
