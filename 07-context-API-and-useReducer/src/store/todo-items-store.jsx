import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

export const TodoItemsContext = createContext({
    todoItems: [],
    addNewItem: () => { },
    deleteItem: () => { },
});

const todoItemsReducer = (currTodoItems, action) => {
    let newTodoItems = currTodoItems;

    if (action.type === "NEW_ITEM") {
        newTodoItems = [
            ...currTodoItems,
            {
                id: Date.now(),
                name: action.payload.itemName,
                dueDate: action.payload.itemDueDate,
            },
        ];
    } else if (action.type === "DELETE_ITEM") {
        newTodoItems = currTodoItems.filter(
            (item) => item.id !== action.payload.id
        );
    }

    return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
    const [todoItems, dispatchTodoItems] = useReducer(
        todoItemsReducer,
        []
    );

    const addNewItem = (itemName, itemDueDate) => {
        dispatchTodoItems({
            type: "NEW_ITEM",
            payload: {
                itemName,
                itemDueDate,
            },
        });
    };

    const deleteItem = (id) => {
        dispatchTodoItems({
            type: "DELETE_ITEM",
            payload: {
                id,
            },
        });
    };

    return (
        <TodoItemsContext.Provider
            value={{
                todoItems,
                addNewItem,
                deleteItem,
            }}
        >
            {children}
        </TodoItemsContext.Provider>
    );
};

TodoItemsContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default TodoItemsContextProvider;