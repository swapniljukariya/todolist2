import React, { useState } from 'react';
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [filter, setFilter] = useState('all');

  const addTodo = () => {
    if (task) {
      setTodos([...todos, { text: task, isCompleted: false }]);
      setTask('');
    }
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const editTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.isCompleted));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') {
      return !todo.isCompleted;
    }
    return true;
  });

  return (
    <div>
      <div className=' Header'>
        TodolistApp
      </div>
      <div className='input-section'>
       <div>
       <input
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <button  className="btn"onClick={addTodo}>Add</button>
       </div>
      <div className='filters'>
      
        <button className='btn-i' onClick={() => setFilter('all')}>All</button>
        <button className=' btn-i' onClick={() => setFilter('active')}>Active </button>
        <button className='btn-i' onClick={clearCompleted}>Clear all</button>
      </div>
        </div>
        <h2 className='title'>Your Todos</h2>
        <div className='display-section'>
        {filteredTodos.map((todo, index) => (
          <div className="todos"key={index} style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
            <div className='todo'>
            {todo.text}
           
           <div className='toggle'>
           <button className="btn-ij"onClick={() => completeTodo(index)}>
              {todo.isCompleted ? 'Uncheck' : 'Check'}
            </button>
            <button className="btn-ij" onClick={() => editTodo(index, prompt('Edit todo'))}>
              Edit
            </button>
            <button className="btn-ij"onClick={() => deleteTodo(index)}>
              Delete
            </button>
           </div>
            </div>

          
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
