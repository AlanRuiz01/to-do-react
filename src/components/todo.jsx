import { useState } from 'react';
import './todo.css'

export default function Todo() {

 
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };


  return (
    <div>
    <div className='todo-container'>
      <h1>Todo List</h1>
      <div className='add-task'>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Ir al supermercado"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul className='list-task'>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
            <button onClick={() => handleDeleteTodo(todo.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      </div>
      <footer>
            <p>© Alan Ruiz Website <a href="https://github.com/AlanRuiz01">Click to see My Github</a></p>
        </footer>
    </div>
  );
}