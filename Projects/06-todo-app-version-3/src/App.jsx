import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";

import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);

    const newTodoItems = [
      ...todoItems,
      {
        id: Date.now(),
        name: itemName,
        dueDate: itemDueDate,
      },
    ];

    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (id) => {
    const newTodoItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      />
    </center>
  );
}

export default App;