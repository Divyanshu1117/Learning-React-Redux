import { useDispatch } from "react-redux";

const Controls = () => {

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch({ type: "INCREMENT" });

    }
    const handleDecrement = () => {
        dispatch({ type: "DECREMENT" });
    }

    return (
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary" onClick={handleIncrement}>
                +1
            </button>
            <button type="button" className="btn btn-success" onClick={handleDecrement}>
                -1
            </button>
        </div>
    );
};

export default Controls;