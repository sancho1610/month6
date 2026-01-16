import { useState } from 'react';
import { useTodoStore } from '../zustand/store';
import './TodoList.css';

function TodoListZustand() {
  const [input, setInput] = useState('');
  const { items, addTodo, removeTodo, toggleTodo, editTodo } = useTodoStore();

  const handleAddTodo = () => {
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  const handleRemoveTodo = (id) => {
    removeTodo(id);
  };

  const handleToggleTodo = (id) => {
    toggleTodo(id);
  };

  const handleEditTodo = (id, newText) => {
    if (newText.trim()) {
      editTodo(id, newText);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-container">
      <h1>Todo List (Zustand)</h1>
      
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Добавить задачу..."
          className="todo-input"
        />
        <button onClick={handleAddTodo} className="add-btn">
          Добавить
        </button>
      </div>

      <ul className="todo-list">
        {items.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
              className="todo-checkbox"
            />
            <span
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => handleEditTodo(todo.id, e.currentTarget.textContent)}
              className="todo-text"
            >
              {todo.text}
            </span>
            <button
              onClick={() => handleRemoveTodo(todo.id)}
              className="delete-btn"
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>

      <div className="stats">
        <p>Всего задач: {items.length}</p>
        <p>Выполнено: {items.filter((t) => t.completed).length}</p>
      </div>
    </div>
  );
}

export default TodoListZustand;
