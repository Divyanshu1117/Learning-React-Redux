import PropTypes from "prop-types";

const Container = ({ children }) => {
    return (
        <div className="card" style={{ width: "100%" }}>
            <div className="card-body">
                {children}
            </div>
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.node,
};

export default Container;