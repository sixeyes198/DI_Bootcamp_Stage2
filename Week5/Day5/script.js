//Create an empty array :

const tasks = [];

// Create a function called addTask(). As soon as the user clicks on the button:

const button = document.querySelector(`button`);
button.addEventListener(`click`, addTask);

function addTask(e) {
  e.preventDefault();
}
// check that the input is not empty,// added required with outout the text input the form wont be submmited

// then add it to the array (ie. add the text of the task)
const userInput = document.getElementById(`userInput`);
console.log(userInput.value);

// then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
// Each new task added should have (starting from left to right - check out the image at the top of the page)
// a “X” button. Use font awesome for the “X” button.
// an input type="checkbox". The label of the input is the task added by the user.
