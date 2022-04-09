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
    }

    getTasks();
  }, []);

  // Fetch tasks from json-server
  const fetchTasks = async () => {
    let res = await fetch("http://localhost:5000/tasks");
    let data = await res.json();

    console.log("tasks from local server:", data);
    return data;
  };

  // Delete a Task from Tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  };

  // Turn of/off reminder on a Task
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => {
      if(task.id === id) {
        return {...task, reminder: !task.reminder}
      } else {
        return task;
      }
    }))
  };
  const addTask = (task) => {
    // console.log(task);
    const id = tasks.length + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="container">
      <Header onClickAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 || tasks ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      : <p>No tasks</p>}
    </div>
  );
}

export default App;
