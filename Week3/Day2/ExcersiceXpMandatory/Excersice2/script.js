// // //Excersice 2 / part1 i hope i got it right daniel? ,if not let me know, because i understand the materias just not what they asknon the DE octo website

// const myWatchedSeries= ["The Vikings", "The Witcher", "Game of thrones"];
// let myWatchedSeriesLength = myWatchedSeries.length;
// let myWatchedSeriesSentence = ["I watched 3 tv shows on netflix:"]
// console.log(myWatchedSeriesSentence + myWatchedSeriesLength);


//Part 2- change the 3rd seires in this case : game of thornes to friends
const myWatchedSeries= ["The Vikings", "The Witcher", "Game of thrones"];
let myWatchedSeriesLength = myWatchedSeries.length;
let myWatchedSeriesSentence = ["I watched 3 tv shows on netflix:"]
console.log(myWatchedSeriesSentence + myWatchedSeriesLength);
myWatchedSeries.splice(2,1, "Friends");
