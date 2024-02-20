const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tasks = [
  { id: 1, task: "clean my room" },
  { id: 2, task: "Do the laundry" },
  { id: 3, task: "walk the dog" },
  { id: 4, task: "feed the cat" },
];

// getting all tasks
app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

// Getting tasks by id
app.get("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex((item) => item.id == id);
  tasks[index] = { ...tasks[index] };
  res.status(200).json(tasks[index]);
});

// creating a new task and pushing it to the tasks array

app.post("/tasks", (req, res) => {
  const { task } = req.body;
  const newTask = {
    id: tasks.length + 1,
    task,
  };
  tasks.push(newTask);
  if (!newTask) {
    return res.status(404).json({ messege: "Cant add the task" });
  }
  res.status(200).json(tasks);
});

// Updating a task

app.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  const index = tasks.findIndex((item) => item.id == id);
  tasks[index] = { ...tasks[index], task };
  if (!tasks[index]) {
    return res.status(404).json({ messege: "Cant edit the task" });
  }
  res.status(200).json(tasks);
});

app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const indx = tasks.findIndex((item) => item.id == id);
  tasks.splice(indx, 1);
  if (!indx) {
    return res.status(404).json({ messege: "Cant delete the task" });
  }
  res.status(200).json(tasks);
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`Running on ${process.env.PORT || 3001}`);
});
