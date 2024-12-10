import { useState } from 'react'
import './App.css'

import Todo from './components/Todo';
import TodoForms from './components/TodoForms';


function App() {
  const [todos, setTodos] = useState([
    {
    id: 1,
    text: "Develop functionality X in the system", 
    category: "Work",
    isCompleted: false
    },
    {
    id: 2,
    category: "Personal",
    text: "Go to gym",
    isCompleted: false
    },
    {
    id: 3,
    category: "Studies",
    text: "Study React",
    isCompleted: false
    }
  ]);

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      }
    ]

    setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null)
    setTodos(filteredTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id ===id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }


  return <div className='app'>
    <h1>TODO LIST</h1>
    <div className='todo-list'>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} 
        removeTodo={removeTodo} 
        completeTodo={completeTodo}
        />
      ))}
    </div>
    <TodoForms addTodo={addTodo} />
  </div>
    
}

export default App
