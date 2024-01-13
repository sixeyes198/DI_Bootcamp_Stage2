//Optional Exercise: Javascript Logic

//Question 1:

const givenArray = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
const orderedArray = givenArray.sort((a, b) => a - b);
console.log(orderedArray); // [1, 1, 1, 1, 2, 2, 2, 4, 5, 10, 20, 20, 391, 392, 591]

const result = [];
let currentGroup = [];

for (let i = 0; i < orderedArray.length; i++) {
  currentGroup.push(orderedArray[i]);

  if (orderedArray[i] !== orderedArray[i + 1]) {
    if (currentGroup.length > 1) {
      result.push(currentGroup.slice());
    } else {
      result.push(currentGroup[0]);
    }
    currentGroup = [];
  }
}

console.log(result); // [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]
//dont understand the bonus if they are already numbers
