import { useState, useEffect } from 'react';

import Header from "./components/Header";
import Tasks from "./components/Tasks";

import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // Fetch tasks from json-server
  const fetchTasks = async () => {
    let res = await fetch("http://localhost:5000/tasks");
    let data = await res.json();

    console.log("tasks from local server:", data);
    return data;
  };

  // Log task before deletion from db
  const _deletedData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((task) => console.log("deleted task: ", task));
  };
  
  // Delete a Task from Tasks
  const deleteTask = async (id) => {
    //log task before deletion
    _deletedData (`http://localhost:5000/tasks/${id}`);

    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Turn of/off reminder on a Task
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, reminder: !task.reminder };
        } else {
          return task;
        }
      })
    );
  };

  // Add a task to db and UI
  const addTask = async (task) => {
    // console.log(task);
    // const id = Math.floor(Math.random()*100000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);

    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task)
    });

    const newTask = await res.json();

    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header
        onClickAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 || tasks ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <p>No tasks</p>
      )}
    </div>
  );
}

export default App;
