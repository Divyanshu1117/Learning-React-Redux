import PropTypes from "prop-types";
import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
    const [todoName, setTodoName] = useState("");
    const [dueDate, setDueDate] = useState("");

    const handleNameChange = (event) => {
        setTodoName(event.target.value);
    };

    const handleDateChange = (event) => {
        setDueDate(event.target.value);
    };

    const handleAddButtonClicked = () => {
        // Empty todo ya date na ho to add mat karo
        if (todoName.trim() === "" || dueDate === "") {
            return;
        }

        onNewItem(todoName, dueDate);

        // Input fields ko reset kar do
        setTodoName("");
        setDueDate("");
    };

    return (
        <div className="container text-center">
            <div className="row kg-row">
                <div className="col-6">
                    <input
                        type="text"
                        placeholder="Enter Todo Here"
                        value={todoName}
                        onChange={handleNameChange}
                    />
                </div>

                <div className="col-4">
                    <input
                        type="date"
                        value={dueDate}
                        onChange={handleDateChange}
                    />
                </div>

                <div className="col-2">
                    <button
                        type="button"
                        className="btn btn-success kg-button"
                        onClick={handleAddButtonClicked}>
                        <BiMessageAdd />
                    </button>
                </div>
            </div>
        </div>
    );
}

AddTodo.propTypes = {
    onNewItem: PropTypes.func.isRequired,
};

export default AddTodo;