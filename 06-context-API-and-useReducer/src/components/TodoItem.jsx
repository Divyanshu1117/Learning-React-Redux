import PropTypes from "prop-types";
import { RiDeleteBin2Fill } from "react-icons/ri";

function TodoItem({ id, todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>

        <div className="col-4">{todoDate}</div>

        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDeleteClick(id)}
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

  onDeleteClick: PropTypes.func.isRequired,
};

export default TodoItem;