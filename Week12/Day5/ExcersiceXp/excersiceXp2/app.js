import { people } from "./data.js";

const usersAverageAge = () => {
  let sum = 0;
  people.forEach((element) => {
    sum += element.age;
  });
  return `The average age is: ${sum / 3}`;
};

console.log(usersAverageAge(people));
