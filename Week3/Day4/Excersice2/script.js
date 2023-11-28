//🌟 Exercise 2: Chihuahua
// Instructions
// Create a variable called newDog where it’s value is “Chihuahua”.
// Check and display how many letters are in newDog.
// Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
// Check if the variable newDog is equal to “Chihuahua”
// if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
// else, console.log ‘I dont care, I prefer cats’
//1//2
let newDog = "Chihuahua";
console.log(newDog.length);

//3
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
//4

if (newDog == "Chihuahua"){
    console.log( "I love Chihuahuas, it’s my favorite dog breed")
} else{
    console.log("I dont care, I prefer cats")
}
