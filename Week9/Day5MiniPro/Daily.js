// const array = [1, 2, 3, 4, 5, 6];
// const newArray = array.forEach(
//   (element, index) =>
//     element > 0 && console.log(`element: ${element}  index: ${index}`)
// );

// const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const allElementsGreaterThen = array3.every((element) => {
//   console.log(`element: ${element}`);
//   return element > 0;
// });

// console.log(allElementsGreaterThen);

/////Daily challenge  Create a function that returns true if all parameters are truthy, and false otherwise.
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const allElementsGreaterThenZero = check(array2);

function check(arr) {
  return arr.every((element) => {
    console.log(`element: ${element}`);
    return element > 0;
  });
}
console.log(allElementsGreaterThenZero);
