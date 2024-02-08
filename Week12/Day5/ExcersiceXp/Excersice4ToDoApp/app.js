import { TodoList } from "./Todo.js";

const todoList = new TodoList(); // instance of the todoList class

// add tasks
todoList.addTask("Buy groceries");
todoList.addTask("Do laundry");
todoList.addTask("Walk the dog");

todoList.markTaskAsComplete(2); // mark tasks as completed

todoList.listAllTasks(); //listing all the tasks
