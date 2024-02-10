import express, { json } from "express";

const app = express();
app.use(express.json());

let booksData = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    published: 1960,
  },
  { id: 2, title: "1984", author: "George Orwell", Published: 1949 },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    published: 1813,
  },
  {
    id: 4,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    published: 1925,
  },
];

//getting all books
app.get("/api/books", (req, res) => {
  res.send(booksData);
});

// getting book by id
app.get("/api/books/:bookId", (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = booksData.find((item) => item.id === bookId);
  if (book) {
    res.send(book).status(200);
  } else {
    res.status(404).send("Book Not Found");
  }
});

//creating a book post

app.post("/api/books", (req, res) => {
  const { title, author, published } = req.body;

  const newBook = {
    id: booksData.length + 1,
    title,
    author,
    published,
  };
  booksData.push(newBook);
  res.status(201).send(newBook);
});

app.listen(5000, "localhost", () => {
  console.log("listening on port 5000");
});
