typeof(15);
console.log(15);
// Prediction: number
// Actual: number

typeof(5.5);
console.log(5.5);
// Prediction: number
// Actual: number

typeof(NaN);
console.log(NaN);
// Prediction: number
// Actual: NaN

typeof("hello");
console.log("hello");
// Prediction: string
// Actual: string

typeof(true);
console.log(true);
// Prediction: boolean
// Actual: true

typeof(1 != 2);
console.log(1 != 2);
// Prediction: true
// Actual: true

"hamburger" + "s"
console.log("hamburger" + "s");
// Prediction: hamburgers
// Actual: hamburgers

"hamburgers" - "s"
console.log("hamburgers" - "s");
// Prediction: hamburger
// Actual: NaN

"1" + "3"
console.log("1" + "3");
// Prediction: 13
// Actual: 13

"1" - "3"
console.log("1" - "3");
// Prediction: malfunction
// Actual: -2

"johnny" + 5
console.log("johnny" + 5);
// Prediction: johnny5
// Actual: johnny5

"johnny" - 5
console.log("johnny" - 5);
// Prediction:  Nan
// Actual: NAn

99 * "hello"
console.log(99 * "hello");
// Prediction: Nan
// Actual: Nan

1 != 1
console.log(1 != 1 );
// Prediction: false
// Actual: false

1 == "1"
console.log(1 == "1");
// Prediction: True
// Actual: True

1 === "1"
console.log(1 === "1");
// Prediction: false
// Actual: false