//   Daily Challenge: Gifs

// fetch one random gif depending on the search of the user
// (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
const body = document.body;

async function toFetch() {
  try {
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

    const button1 = document.createElement("button");
    button1.innerText = "Delete me";
    button1.addEventListener("click", (event) => {
      container.removeChild(img);
    });

    body.append(container);
    container.append(img, button1);

    const input = document.getElementById("input");
    input.addEventListener("input", (event) => {
      const searchText = input.value.toLowerCase();
      console.log(searchText);

      async function placeHolder() {
        const res2 = await fetch(
          `https://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
        );
        if (res2.ok) {
          console.log(res2);
        } else {
          new Error("No results found for the specified category.");
        }
        const data2 = await res2.json();
        console.log(data2.data);
        const newImgUrl = data2.data[6].images.original.url;
        const newImg = document.createElement("img");
        const button2 = document.createElement("button");
        button2.setAttribute("input", "button2");
        button2.innerText = "Delete me";
        button2.addEventListener("click", (event) => {
          container.removeChild(newImg);
        });
        newImg.setAttribute("src", newImgUrl);
        container.appendChild(newImg);
        container.appendChild(button2);
      }
      placeHolder();
    });

    const button = document.getElementById("button");
    button.addEventListener("click", (event) => {
      return (container.innerHTML = " ");
    });
  } catch (error) {
    console.log("something went wrong");
  }
}
toFetch();
