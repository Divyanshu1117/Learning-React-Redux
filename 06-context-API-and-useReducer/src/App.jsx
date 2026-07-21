import { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => {
      const newTodoItems = [
        ...currValue,
        {
          id: Date.now(),
          name: itemName,
          dueDate: itemDueDate,
        },
      ];
      return newTodoItems;
    });
  };

  const handleDeleteItem = (id) => {
    const newTodoItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(newTodoItems);
  };

  const defaultTodoItems = [
    {
      id: 1,
      name: "Go to school",
      dueDate: "Today",
    },
    {
      id: 2,
      name: "Complete React",
      dueDate: "Tomorrow",
    },
  ];

  return (
    <TodoItemsContext.Provider value={defaultTodoItems}>
      <center className="todo-container" >
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
        />
      </center >
    </TodoItemsContext.Provider>
  );
}

export default App;