let userNumber = prompt(`Please pick a number to start the count:`);
let startingBottels = Number(userNumber); //changing string to number.

let y = ` ${startingBottels} bottles of beer on the wall ${startingBottels} bottles of beer`;
for (let i = 1; i <= `${startingBottels}`; i--) {
  x = -1;
  console.log(`${startingBottels} of beer on the wall ${startingBottels} bottles of beer
  take ${i} down , pass it around ${x} bottles of beer on the wall`);
  if (i - 1 === 0) {
    console.log(`No more bottles of beer on the wall`);
  } else {
    console.log(`${i - 1} ${startingBottels} of beer on the wall`);
  }
}
