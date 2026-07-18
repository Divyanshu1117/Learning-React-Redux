import PropTypes from "prop-types";
import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
    return <input className={styles.display} type="text" value={displayValue} readOnly />
}

Display.propTypes = {
    displayValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Display;