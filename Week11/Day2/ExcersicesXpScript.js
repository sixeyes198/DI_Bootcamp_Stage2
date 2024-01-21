// Exercise 1 : Comparison

//1. Create a function called compareToTen(num) that takes a number as an argument.
//2. The function should return a Promise:
//   the promise resolves if the argument is less than or equal to 10
//   the promise rejects if argument is greater than 10.

function compareToTen(num) {
  return new Promise(function (resolve, reject) {
    if (num <= 10) {
      resolve("The number is smaller or equal");
    } else {
      reject("The number is bigger");
    }
  });
}

compareToTen(10)
  .then((ret) => {
    console.log(ret);
  })
  .catch((error) => {
    console.log(error);
  });

// Exercise 2 : Promises

//1. Create a promise that resolves itself in 4 seconds and returns a “success” string.

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 4000);
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Exercise 3 : Resolve & Reject
//1.   Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
//2.   Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

// 1
Promise.resolve(3).then((resolve) => console.log(resolve));

// 2
Promise.reject(`boo`).catch((error) => console.log(error));
