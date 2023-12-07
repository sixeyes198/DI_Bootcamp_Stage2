function playTheGame() {
  const userConfirmation = confirm(`Would you like to play the game?`);

  if (userConfirmation) {
    let userNum = prompt(`Please pick a number between 0-10 `);
    //    console.log(isNaN(userNum));
    if (isNaN(userNum)) {
      alert(`Sorry Not a number, Goodbye`);
    } else if (Number(userNum) > 10 || Number(userNum) < 0) {
      alert(`Sorry it’s not a good number, Goodbye”.`);
    } else {
      const computerNumber = Math.floor(Math.random() * 11);
      console.log(computerNumber);
      compareNumbers(userNum, computerNumber);
    }
  } else {
    console.log(`No problem, Goodbye.`);
  }
}
// playTheGame();

function compareNumbers(userNumber, computerNumber) {
  let tries = 0;

  while (tries < 3 && userNumber !== computerNumber) {
    if (userNumber > computerNumber) {
      userNumber = prompt(
        `Your number is bigger then the computer , guess again`
      );
    } else if (userNumber < computerNumber) {
      userNumber = prompt(
        `our number is smaller then the computer’s, guess again`
      );
    }
    tries++;
  }
  if (userNumber == computerNumber) {
    alert(`WINNER`);
    return;
  } else {
    alert(
      `You reached the maximum tries the correct number was ${computerNumber}`
    );
  }
}
