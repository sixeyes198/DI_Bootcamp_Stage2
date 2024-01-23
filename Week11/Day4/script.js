// Exercise 1 : Giphy API
// function toFetch() {
//   fetch(
//     "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
//   )
//     .then((res) => {
//       console.log(res);
//       if (res.ok) {
//         return res.json();
//       } else {
//         console.log("something happend");
//         throw new Error("We have a problem with the code");
//       }
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// }
// toFetch();

// Exercise 2 : Giphy API

// Use the Fetch API to retrieve 10 gifs about the “sun”

// starting position = 2

// Console.log the Javascript Object that you receive.

// async function toFetch() {
//   const res = await fetch(
//     "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
//   );
//   if (res.ok) {
//     const data = await res.json();
//     if (data.data.length >= 10) {
//       const gifsGroup = data.data.slice(2, 12);
//       console.log(gifsGroup);
//     } else {
//       console.log("I have an issue with finding the corresponding gifs");
//     }
//   } else {
//     console.log("We have an error");
//   }
// }
// toFetch();

// Exercise 3 : Async Function

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

// Create an async function, that will await for the above GET request.
// Make sure to check the status of the Response and to catch any occuring errors.

// async function improving() {
//   try {
//     const firstRespo = await fetch("https://www.swapi.tech/api/starships/9/");
//     if (firstRespo.ok) {
//       console.log(firstRespo);
//     } else {
//       console.log("I found a problem");
//     }
//     const data = await firstRespo.json();
//     console.log(data.result.properties);
//   } catch (error) {
//     console.log(error);
//   }
// }
// improving();

// Exercise 4: Analyze
// Guess what will be the outcome

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  let result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();

// Answer: It should log the calling of the second function And  after 2 seaconds of the 1st function we will get the log of the result which is the resolve
