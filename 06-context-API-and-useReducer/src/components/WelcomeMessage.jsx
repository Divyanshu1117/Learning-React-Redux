import { useContext } from 'react';
import PropTypes from 'prop-types';
import Styles from './WelcomeMessage.module.css';
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
    const todoItems = useContext(TodoItemsContext);
    return (
        todoItems.length === 0 && <p className={Styles.welcome}>Enjoy Your Day</p>
    );
};

WelcomeMessage.propTypes = {
    todoItems: PropTypes.array
};

export default WelcomeMessage;