const { db } = require("../Config/db.js");

const _allTasks = () => {
  return db("todo").select("id", "task", "active");
};

const _addTask = (task) => {
  return db("todo").insert({ task }, ["*"]);
};

const _updateTask = (id, active) => {
  return db("todo").where({ id: id }).update({ active });
};

const _deleteTask = (id) => {
  return db("todo").where({ id }).del();
};

module.exports = { _allTasks, _addTask, _updateTask, _deleteTask };
