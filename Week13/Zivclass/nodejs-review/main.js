let arr = [
  { id: 1, email: "aaa@gmail.com" },
  { id: 2, email: "bbb@gmail.com" },
  { id: 3, email: "ccc@gmail.com" },
];

let arr2 = [
  { id: 4, email: "ddd@gmail.com" },
  { id: 5, email: "eee@gmail.com" },
  { id: 6, email: "fff@gmail.com" },
];

const hello = (name) => {
  console.log(`Hello, ${name}`);
};

const sum = (a, b) => {
  return a + b;
};

module.exports = {
  arr,
  arr2,
  hello,
  sum
};
