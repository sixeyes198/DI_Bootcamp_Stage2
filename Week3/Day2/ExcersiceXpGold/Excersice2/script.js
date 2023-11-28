// excersice 2 Mixup
//Create 2 variables. The values should be strings. For example:

let smartPhone = "iphone"

let oldPhone = "galaxy"
//slicing the 2 letters for the iphone 
let smartPhoneSlice = smartPhone.slice(2);
let oldPhoneSlice = oldPhone.slice(0,2);

// slicing the 2 letters for the galaxy
let smartPhoneSlice2 = smartPhone.slice(0, 2);
let oldPhoneSlice2 = oldPhone.slice(2);

// let neword = oldPhoneSlice + smartPhoneSlice;
//swapping the first 2 letters

console.log(oldPhoneSlice + smartPhoneSlice);
console.log(smartPhoneSlice2 + oldPhoneSlice2);

//3 
let newWord = oldPhoneSlice + smartPhoneSlice +" "+ smartPhoneSlice2 + oldPhoneSlice2;
console.log(newWord);