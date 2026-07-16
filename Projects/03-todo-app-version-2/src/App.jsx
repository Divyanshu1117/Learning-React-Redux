import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";

import './App.css';

function App() {

  const todoItems = [{
    name: 'Buy Milk',
    date: '15/07/2026'
  },
  {
    name: 'Go to Gym',
    date: '15/07/2026'
  },
  {
    name: 'Go to Market',
    date: '15/07/2026'
  }]

  return (
    <center className='todo-container'>
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center >
  );
}

export default App;