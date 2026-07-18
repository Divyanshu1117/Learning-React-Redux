import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";

import './App.css';

function App() {

  const todoItems = [
    {
      id: 1,
      name: "Buy Milk",
      dueDate: "15/07/2026",
    },
    {
      id: 2,
      name: "Go to Gym",
      dueDate: "15/07/2026",
    },
    {
      id: 3,
      name: "Go to Market",
      dueDate: "15/07/2026",
    },
  ];

  return (
    <center className='todo-container'>
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center >
  );
}

export default App;