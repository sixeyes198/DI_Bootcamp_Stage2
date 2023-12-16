//Create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)

// Hint: use one of the following events to remove any character that is not a letter

// keyup event
// or keypress event
// or keydown event
// or input event

const id = document.getElementById(`text`);
console.log(id);
id.addEventListener(`input`, validateInput);
function validateInput(e) {
  // Remove any non-letter characters using a regular expression
  id.value = id.value.replace(/[^a-z]/g, "");
  console.log(e.target.value);
}
