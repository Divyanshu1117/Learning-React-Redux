import { useContext } from "react";
import PropTypes from "prop-types";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({ id, todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>

        <div className="col-4">{todoDate}</div>

        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => deleteItem(id)}
          >
            <RiDeleteBin2Fill />
          </button>
        </div>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,

  todoName: PropTypes.string.isRequired,

  todoDate: PropTypes.string.isRequired,
};

export default TodoItem;