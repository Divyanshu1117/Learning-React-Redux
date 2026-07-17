import styles from "./FoodInput.module.css"
import PropTypes from "prop-types"

const FoodInput = ({ handleKeyDown }) => {
    return <input type="text"
        placeholder="Enter Food Item here"
        className={styles.foodInput}
        onKeyDown={handleKeyDown}
    />;
};

FoodInput.propTypes = {
    handleKeyDown: PropTypes.func.isRequired
};

export default FoodInput;