const username = document.getElementById('user-names');
const title = document.getElementById('title-text');
const content = document.getElementById('content-text');
const saveButton = document.getElementById('save');
const posts = []

function saveLastPost() {
  // Save related form data as an object
  const newPost = {
    username: username.value,
    title: title.value,
    content: content.value.trim(),
  };
  posts.push(newPost);
  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem('posts', JSON.stringify(posts));
}

function renderLastPost() {
  // Use JSON.parse() to convert text to JavaScript object
  const lastPost = JSON.parse(localStorage.getItem('posts'));
  console.log(lastPost);
  // Check if data is returned, if not exit out of the function
  if (lastPost !== null) {
    document.getElementById('saved-username').innerHTML = lastPost[lastPost.length - 1].username;
    document.getElementById('saved-title').innerHTML = lastPost[lastPost.length - 1].title;
    document.getElementById('saved-content').innerHTML = lastPost[lastPost.length - 1].content;
  }
}

saveButton.addEventListener('click', function (event) {
  event.preventDefault();
  saveLastPost();
  renderLastPost();
});

// The init() function fires when the page is loaded
function init() {
  // When the init function is executed, the code inside renderLastGrade function will also execute
  renderLastPost();
}
init();

// Start code to switch to black and white mode

function offColor() {
  var element = document.body;
  element.classList.toggle("off-color");
}