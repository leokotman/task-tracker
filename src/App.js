import { useState } from 'react';

import Header from "./components/Header";
import Tasks from "./components/Tasks";

import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Food shopping",
      date: "Sat 09.04, 12:00",
      reminder: true,
    },
    {
      id: 2,
      text: "Call Jes",
      date: "Sat 09.04, 11:00",
      reminder: true,
    },
    {
      id: 3,
      text: "Practice React",
      date: "Sun 10.04, 12:00",
      reminder: false,
    },
    {
      id: 4,
      text: "Do gardening",
      date: "Sun 10.04, 14:00",
      reminder: false,
    },
  ]);
  const [showAddTask, setShowAddTask] = useState(false);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  };
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
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      : <p>No tasks</p>}
    </div>
  );
}

export default App;
