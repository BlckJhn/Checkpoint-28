import React from 'react';

const TaskItem = ({ task, onDelete, onToggleComplete, onEdit }) => {
  return (
    <div>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onToggleComplete}>
        {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button onClick={onEdit}>Edit</button>
    </div>
  );
};

export default TaskItem;
