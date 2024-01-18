const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?200x200",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/2?200x200",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/3?200x200",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/4?200x200",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/5?200x200",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/6?200x200",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/7?200x200",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/8?200x200",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/9?200x200",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/10?200x200",
  },
];

function displayCards(roboArr) {
  const searchBar = document.getElementById("searchBar"); // later to access and filter
  const cardContainer = document.getElementById("cardContainer"); // the card container

  searchBar.addEventListener("input", (event) => {
    const searchText = searchBar.value.toLowerCase(); // converting the input to lowercase
    console.log(searchBar.value); // checking for the input
    //filtering
    const result = robots.filter((name) => {
      return name.name.toLowerCase().includes(searchText);
    });

    // filtered results
    cardContainer.innerHTML = " ";

    result.forEach((element) => {
      let newDiv = document.createElement("div");
      let imgContainer = document.createElement("img");
      let h3 = document.createElement("h3");
      let p = document.createElement("p");
      newDiv.setAttribute("class", "all");
      cardContainer.appendChild(newDiv);
      newDiv.appendChild(imgContainer);
      newDiv.appendChild(h3);
      newDiv.appendChild(p);
      imgContainer.setAttribute("src", element.image);
      h3.innerText = element.name;
      p.innerText = element.email;
    });
  });
  // displaying the robots
  roboArr.forEach((element) => {
    let newDiv = document.createElement("div"); //creating the cards div
    let imgContainer = document.createElement("img"); // creating an img tag
    let h3 = document.createElement("h3"); //creating the h3 title
    let p = document.createElement("p"); // creating the paragraph
    newDiv.setAttribute("class", "all"); //setting the class for the div
    cardContainer.appendChild(newDiv); // appending the card to container
    console.log(newDiv);
    newDiv.appendChild(imgContainer);
    newDiv.appendChild(h3);
    newDiv.appendChild(p);
    console.log(element);
    imgContainer.setAttribute("src", element.image);
    h3.innerText = element.name;
    p.innerText = element.email;
  });
}
displayCards(robots);
