//Create an empty array :

const tasks = [];

// Create a function called addTask(). As soon as the user clicks on the button:
const form = document.querySelector(`form`);
console.log(form);
const userInput = document.getElementById("userInput");

const button = document.querySelector(`button`);
button.addEventListener(`click`, addTask);

function addTask(e) {
  e.preventDefault();
  if (userInput.value <= 0) {
    // check that the input is not empty,
    console.log(`Invalid,Please try again`);
  } else {
    console.log(`Task submmited:`, userInput.value);
    tasks.push(userInput.value); // then add it to the array (ie. add the text of the task)
    console.log(tasks);
    const taskList = document.querySelector(`div`); // then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
    const taskItem = document.createElement(`input`); // creating new input
    taskItem.setAttribute(`type`, `checkbox`); // styling it to checkbox
    const label = document.createElement(`label`); // creating label to access text
    label.setAttribute(`for`, `task_${tasks.length}`);
    label.textContent = userInput.value;
    const br = document.createElement(`br`); //creating the space
    const icon = document.createElement(`i`); //creating the X icon
    icon.setAttribute(`class`, `bx bx-x`);
    taskList.appendChild(icon); // each one appear from left to right , new line..
    taskList.appendChild(taskItem);
    taskList.appendChild(label);
    taskList.appendChild(br);
    console.log(taskList);
    userInput.value = ``; // clearing the input for future use
  }
}

// Each new task added should have (starting from left to right - check out the image at the top of the page)
// a “X” button. Use font awesome for the “X” button.
