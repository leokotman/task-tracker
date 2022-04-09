import { useState } from 'react';

const AddTask = ({onAdd}) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const addTask = (e) => {
    e.preventDefault();
    
    if(!text || !day) {
      alert('Please add task + day correctly');
      return;
    }
    onAdd({text, day, reminder});
    clearForm();
  };
  const clearForm = () => {
    setText('');
    setDay('');
    setReminder(false);
  }

  return (
    <form className="add-form" onSubmit={addTask}>
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Day & time</label>
        <input type="text" placeholder="Add Day & time" value={day} onChange={(e) => setDay(e.target.value)}/>
      </div>
      <div className="form-control form-control-check" >
        <label>Set reminder</label>
        <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  )
}

export default AddTask;
