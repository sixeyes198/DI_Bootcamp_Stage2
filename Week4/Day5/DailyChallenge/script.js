let userNumber = prompt(`Please pick a number to start the count:`);
let numberOfBeers = Number(userNumber);
let numberOfBeersToTake = 1;

while (numberOfBeers > 0) {
  const sonata = makeSonata(numberOfBeers, numberOfBeersToTake);
  console.log(sonata);
  numberOfBeers -= numberOfBeersToTake;
  numberOfBeersToTake++;
}

function makeSonata(num, counter) {
  const bottleOrBottles = getBottleOrBottles(num);
  const sonata = `${num} ${bottleOrBottles} of beer on the wall
${num} ${bottleOrBottles} of beer
Take ${counter} down, pass it around
${num - counter} ${getBottleOrBottles(num - counter)} of beer on the wall`;

  return sonata;
}

function isPlural(num) {
  return num > 1;
}

function getBottleOrBottles(num) {
  if (isPlural(num)) {
    return `bottles`;
  } else {
    return `bottle`;
  }
}
