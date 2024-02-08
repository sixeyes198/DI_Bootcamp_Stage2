import { add, multiply } from "./math.js";
import _ from "lodash";

let num1 = _.random(100);
let num2 = _.random(100);
console.log(num1, num2);
let sum = add(num1, num2);
const multi = _.multiply(5, 3);

console.log(`Sum: ${sum}`);
console.log(`Multipl is :${multi}`);
