// var titleInput = document.querySelector('.title-input');
// var urlInput = document.querySelector('.url-input');
// var infoSection = document.querySelector('.info');

// function checkTitleInput() {
//   if(titleInput.value = '') {
//     infoSection.innerText = 'Please enter a title for your link.';
//   }
// }
//
// function checkUrlInput() {
//   if(urlInput.value = '') {
//     infoSection.innerText = 'Please enter a URL for your link.';
//   }
// }
// var infoSection = $('.info');
// var titleInput = $('.title-input');
// var urlInput = $('.url-input');

// Adds Articles to List

$('.submit-button').on('click', function() {
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
