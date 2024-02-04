//simple server

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url == "/about") {
//     res.end("<h1>This is joes page!!</h1>");
//   } else {
//     res.writeHead(404, {
//       "content-type": "text/html",
//     });
//     res.end("<h1>Welcome to My Server</h1>");
//   }
// });

// server.listen(3000, "localhost", () => {
//   console.log("Server is listening at localhost on port 3000");
// });

/// JSON Response

const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "application/json");
  res.writeHead(200);
  res.end(
    JSON.stringify({
      menu: {
        firstCourse: "Vegetable Soup",
        mainCourse: "Hamburger",
        dessert: "Fruit salad",
      },
    })
  );
});

server.listen(3000, "localhost", () => {
  console.log("Server is listening at localhost on port 3000");
});
