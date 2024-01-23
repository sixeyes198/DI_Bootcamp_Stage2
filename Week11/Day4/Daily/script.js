//   Daily Challenge: Gifs

// fetch one random gif depending on the search of the user
// (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
const body = document.body;
const categoryInput = document.getElementById("input").value;

async function toFetch() {
  const res = await fetch(
    "https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
  );
  if (res.ok) {
    console.log(res);
  } else {
    console.log("I found an error");
  }
  const data = await res.json();
  console.log(data);

  const container = document.createElement("div");
  const img = document.createElement("img");
  img.setAttribute("src", data.data.images.original.url);
  body.append(container, img);
}
toFetch();
