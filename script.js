var titleInput = $('.title-input');
var urlInput = $('.url-input');
var submitButton = $('.submit-button');
var clearReadBookmarksButton = $('.clear-read-bookmarks');

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

function countAll () {
  readCounter = $('.read').length;
  totalCounter = $('article').length;
  unreadCounter = totalCounter - readCounter;
  $('.link-counter').text(totalCounter);
  $('.read-links').text(readCounter);
  $('.unread-links').text(unreadCounter);
}

countAll();

function removeLinks() {
  $('.link-counter').text('Number of Links: ' + $('article').length);
}

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
    countAll();
  }
});

clearReadBookmarksButton.on('click', function() {
    $('.read').remove('article');
    countAll();
});

// Removes when Remove Button is clicked
$('.container').on('click', '.remove-button', function() {
  $(this).parent().parent().remove('article');
  removeLinks();
  countAll();
});

$('.container').on('click', '.read-button', function() {
  $(this).parent().parent().toggleClass('read');
  countAll();
});
