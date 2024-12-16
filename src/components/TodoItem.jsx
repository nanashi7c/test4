import React from 'react';

function TodoItem({ task, completed }) {
  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <p>{task}</p>
    </div>
  );
}

export default TodoItem;
