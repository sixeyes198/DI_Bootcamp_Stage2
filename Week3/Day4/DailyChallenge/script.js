//daily challenge 1

let sentence = "The movie is not that bad, I like it";
//2
let wordNot = sentence.indexOf("not");
//3
let wordBad = sentence.indexOf("bad");
//4
if (wordNot !== -1 && wordBad !== -1 && wordNot < wordBad) {
    var result = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
    console.log(result);
  } else {
    console.log(sentence);
}