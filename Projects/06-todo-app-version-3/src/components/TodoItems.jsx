import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

TodoItems.propTypes = {
  todoItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      name: PropTypes.string.isRequired,
      dueDate: PropTypes.string.isRequired,
    })
  ).isRequired,

  onDeleteClick: PropTypes.func.isRequired,
};

export default TodoItems;