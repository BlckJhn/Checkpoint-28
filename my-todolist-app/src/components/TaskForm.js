import React, { useState } from 'react';

const TaskForm = ({ onSubmit, initialTask }) => {
  const [task, setTask] = useState(initialTask || { name: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.name || !task.description) return;
    onSubmit(task);
    setTask({ name: '', description: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Task name"
        value={task.name}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Task description"
        value={task.description}
        onChange={handleChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
