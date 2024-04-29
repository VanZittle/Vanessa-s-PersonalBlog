const formEl = $('#post-form');
const usernameInputEl = $('#username-input');
const titleInputEl = $('#title-input');
const commentInputEl = $('#comment-input');
const postsDisplayEl = $('#posts-display');

const printPostData = function (username, title, comment) {

  let postEntries= JSON.parse(localStorage.getItem('postEntries')) || [];
  
  // add new data
  postEntries.push ({username, title, comment});
  // save the update in local storage
  localStorage.setItem('postEntries',JSON.stringify(postEntries));

  const cardColumnEl = $('<div>');
  cardColumnEl.addClass('col-12 col-md-4 mb-4');

  const cardEl = $('<div>');
  // add a class of .custom-card
  cardEl.addClass('card h-100');
  cardEl.appendTo(cardColumnEl);

  // add a class of .custom-card-header
  const cardName = $('<h5>').addClass('card-header custom-card-header').text(username);
  cardName.appendTo(cardEl);

  const cardBodyEl = $('<div>');
  cardBodyEl.addClass('card-body');
  cardBodyEl.appendTo(cardEl);

  const cardTitle = $('<p>').addClass('card-text').text(title);
  cardTitle.appendTo(cardBodyEl);

  const cardComment = $('<p>').addClass('card-text').text(comment);
  cardComment.appendTo(cardBodyEl);

  postsDisplayEl.append(cardColumnEl);
};

const handleFormSubmit = function (event) {
  event.preventDefault();

  const usernameInput = usernameInputEl.val();
  const titleInput = titleInputEl.val();
  const commentInput = commentInputEl.val();

  if (!usernameInput || !titleInput || !commentInput) {
    alert('Fill out all inputs in the form, please');
    return;
  }

  printPostData(usernameInput, titleInput, commentInput);

  // reset form
  usernameInputEl.val('');
  titleInputEl.val('');
  commentInputEl.val('');
};

formEl.on('submit', handleFormSubmit);

// Start code to switch to black and white mode

function offColor() {
  var element = document.body;
  element.classList.toggle("off-color");
}