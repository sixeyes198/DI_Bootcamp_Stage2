const {
  _allTasks,
  _addTask,
  _updateTask,
  _deleteTask,
} = require("../models/taskModel.js");

const allTasks = async (req, res) => {
  try {
    const data = await _allTasks();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.staus(404).json({ message: "Not found" });
  }
};

const addTask = async (req, res) => {
  const { task } = req.body;
  console.log(task);
  try {
    const data = await _addTask(task);
    // res.status(200).json(data);
    allTasks(req, res);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Cant insert the data" });
  }
};

const updateTask = async (req, res) => {
  const taskId = req.params.id;
  try {
    const data = await _updateTask(taskId, false);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Cant remove task Internal error" });
  }
};

const deleteTask = async (req, res) => {
  const taskId = req.params.id;
  try {
    await _deleteTask(taskId);
    // res.status(200);
    allTasks(req, res);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Cant remove task Internal error" });
  }
};

module.exports = { allTasks, addTask, updateTask, deleteTask };
