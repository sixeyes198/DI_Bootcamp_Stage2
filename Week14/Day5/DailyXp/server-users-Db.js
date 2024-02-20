import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const users = [{}];

// POST /register: Allow users to register by providing a username and password. Hash the password using bcrypt before storing it in the JSON file.
// POST /login: Allow users to login by providing their username and password. Compare the hashed password from the JSON file with the provided password.
// GET /users: Retrieve a list of all registered users from a JSON file (only for demonstration purposes; no authentication required).
// GET /users/:id: Retrieve a specific user by ID from the JSON file (only for demonstration purposes; no authentication required).
// PUT /users/:id: Update a user’s information by ID in the JSON file (only for demonstration purposes; no authentication required).

app.listen(process.env.PORT || 3000, () => {
  console.log(`Running on ${process.env.PORT || 3000}`);
});
