const express = require("express");
const {
  allTasks,
  addTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasksControl.js");

const router = express.Router();

router.get("/", allTasks);
router.post("/", addTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
