import PropTypes from "prop-types";

const ErrorMessage = ({ items }) => {
    return <>{items.length === 0 && <h3>I am still hungry..</h3>}</>;
};

ErrorMessage.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ErrorMessage;