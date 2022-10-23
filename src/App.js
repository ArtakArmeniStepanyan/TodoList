import './App.css';
import React, { useState } from 'react';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';
import Footer from './Components/Footer';
function App() {

  const[todos, setTodos] = useState([
    {
      id: 1,
      text: 'Learn React',
      date: '2022-10-15',
      isCompleted: true
    },
    {
      id: 2,
      text: 'Go to the interview',
      date: '2022-10-15',
      isCompleted: false
    },
    {
      id: 3,
      text: 'Get a job',
      date: '2022-10-16',
      isCompleted: false
    },
  ])

  const addNewTodo = (newTodo) => {
    setTodos([
      ...todos, {
        id: todos.length + 3,
        text: newTodo.text,
        date: newTodo.date,
        isCompleted: false
      }
    ])
  }

  const onChange = (todo) => {
    setTodos(todos.map((t) => {
      if(t.id === todo.id){
        return todo;
      }
      return t;
    }))
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id))
  }

  const onClearCompleted = () => {
    setTodos(todos.filter((t) => !t.isCompleted))
  }

  return (
    <div className="App">
      <h1>todos</h1>
      <div className="mainWindow">
        <div className='mainApp'>
          <TodoForm addNewTodo={addNewTodo}/>
          <TodoList 
            todos={todos}
            onDelete={onDelete}
            onChange={onChange}
            />
          <Footer todos={todos} onClearCompleted={onClearCompleted}/>  
        </div>
      </div>
    </div>
  );
}

export default App;
