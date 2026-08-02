import PropTypes from 'prop-types';

const WelcomeMessage = ({ onGetPostsClick }) => {
    return (
        <center className="welcome-message">
            <h1>There are no posts</h1>
            <button type="button"
                onClick={onGetPostsClick}
                className="btn btn-primary">Get Posts From Server</button>
        </center>
    );
}

WelcomeMessage.propTypes = {
    onGetPostsClick: PropTypes.func.isRequired,
};

export default WelcomeMessage;