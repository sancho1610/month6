import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleTodo, editTodo } from '../redux/todoSlice';
import './TodoList.css';

function TodoListRedux() {
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleEditTodo = (id, newText) => {
    if (newText.trim()) {
      dispatch(editTodo({ id, text: newText }));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-container">
      <h1>Todo List (Redux Toolkit)</h1>
      
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
        {todos.map((todo) => (
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
        <p>Всего задач: {todos.length}</p>
        <p>Выполнено: {todos.filter((t) => t.completed).length}</p>
      </div>
    </div>
  );
}

export default TodoListRedux;
