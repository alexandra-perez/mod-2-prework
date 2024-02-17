const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
  if (inputBox.value === '') {
    alert('You must write something'); // alerts user if nothing is entered when trying to add task
  } else {
    let li = document.createElement('li'); // creates li element
    li.innerHTML = inputBox.value; // sets the text inside the li to the text from the input field
    listContainer.appendChild(li); // appends it to list-container

    let span = document.createElement('span'); // creates new span
    span.innerHTML = '\u00d7'; // creates x icon in span tag
    li.appendChild(span); // appends span to li
  }
  inputBox.value = ''; // sets input field back to blank

  saveData(); // will save the updated content in the browser
}

listContainer.addEventListener(
  'click',
  function (e) {
    // function executes on click
    if (e.target.tagName === 'LI') {
      // checks if li was clicked
      e.target.classList.toggle('checked'); // if so, adds/removes checked class
      saveData(); // will save the updated content in the browser
    } else if (e.target.tagName === 'SPAN') {
      // checks if span was clicked
      e.target.parentElement.remove(); // if so, removes the parent element (li)
      saveData(); // will save the updated content in the browser
    }
  },
  false
);

function saveData() {
  localStorage.setItem('data', listContainer.innerHTML); // stores content from listContainer into 'data'
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem('data'); // will give all the content stored in the browser under 'data
}
showTask();
