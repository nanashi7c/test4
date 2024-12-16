import React, { useState } from 'react';
import TodoItem from '../components/TodoItem';

function Home() {
  const [todos, setTodos] = useState([
    { id: 1, task: 'Learn React', completed: false },
    { id: 2, task: 'Build a Todo App', completed: false },
  ]);

  return (
    <main>
      <h2>Your Tasks</h2>
      {todos.map(todo => (
        <TodoItem key={todo.id} task={todo.task} completed={todo.completed} />
      ))}
    </main>
  );
}

export default Home;
