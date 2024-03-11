import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import { useState, useEffect } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  //   fetching all tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:3000/api/todo");
    const tasks = await res.json();
    setTasks(tasks);
  };

  // fetching new task
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: inputValue }),
    });
    const data = await response.json();
    setTasks(data);
    setInputValue("");
  };

  // const handleTaskClear = async (taskId) => {
  //   const response = await fetch(`http://localhost:3000/api/todo/${taskId}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ active: false }),
  //   });
  //   console.log(response);
  //   if (response.ok) {
  //     fetchTasks();
  //   }
  // };
  const handleTaskDelete = async (taskId) => {
    const response = await fetch(`http://localhost:3000/api/todo/${taskId}`, {
      method: "DELETE",
    });
    console.log(response);
    if (response.ok) {
      // fetchTasks();
      fetchTasks();
    }
  };

  return (
    <ListGroup as="ul">
      {tasks.map((item, index) => (
        <ListGroup.Item
          as="li"
          key={index}
          style={{ width: "500px" }}
          // onClick={() => handleTaskClear(item.id)}
          onClick={() => handleTaskDelete(item.id)}
          disabled={!item.active}
        >
          {item.task}
        </ListGroup.Item>
      ))}

      <form onSubmit={handleSubmit}>
        <label>Add a new task:</label>
        <br></br>
        <input
          type="text"
          value={inputValue}
          style={{
            width: "500px",
            backgroundColor: "white",
            color: "black",
            borderRadius: "5px",
          }}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </ListGroup>
  );
};

export default TodoList;
