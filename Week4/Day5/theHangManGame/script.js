let player1Word = prompt(
  `Please enter a word. The word must have a minimum of 8 letters:`
);

if (player1Word.length < 8) {
  console.log(`The word must have at least 8 letters. Please try again.`);
} else {
  let maskedWord = `*`.repeat(player1Word.length); // repeating the letters length with * ..
  console.log(`${maskedWord}`); // login the word hidden..
}

let guessedWord = `*`.repeat(player1Word.length);
const maxAttempts = 10; // maximum attempts
let attempts = 0;

while (guessedWord !== player1Word && attempts < maxAttempts) {
  let player2Letter = prompt(`Please pick a letter.`);
  if (player1Word.includes(player2Letter)) {
    for (let i = 0; i < player1Word.length; i++) {
      if (player1Word[i] === player2Letter) {
        guessedWord =
          guessedWord.substring(0, i) +
          player2Letter +
          guessedWord.substring(i + 1);
      }
    }
  } else {
    console.log(`incorrect guess.Try again`);
    attempts++;
  }
  console.log(guessedWord);
}
