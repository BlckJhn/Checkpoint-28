import React from 'react';
import TaskItem from './TaskItem';
import "../App.css"

const TaskList = ({ tasks, onDelete, onToggleComplete, onEdit }) => {
  if (!tasks || tasks.length === 0) {
    return <div>No tasks yet.</div>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={() => onDelete(task.id)}
          onToggleComplete={() => onToggleComplete(task.id)}
          onEdit={() => onEdit(task)}
        />
      ))}
    </div>
  );
};

export default TaskList;
