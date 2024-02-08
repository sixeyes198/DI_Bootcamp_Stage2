const express = require("express");

const app = express();

app.listen(5000);

/** To Get static files from the server */
app.use("/", express.static(__dirname + "/public"));

app.get("/api", (request, response) => {
  response.send("Hello from my server ");
});
app.get("/home", (request, response) => {
  response.send("<h1>Homepgae</h1>");
});

app.get("/users", (request, response) => {
  ///
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      let users = data.map((item) => {
        return { id: item.id, name: item.name, email: item.email };
      });
      response.send(users);
    });
});

const products = [
  { id: 1, name: "iPhone", price: 670 },
  { id: 1, name: "iPad", price: 550 },
  { id: 1, name: "iWatch", price: 444 },
];

app.get('/products', (req,res)=>{
    res.json(products);
})
