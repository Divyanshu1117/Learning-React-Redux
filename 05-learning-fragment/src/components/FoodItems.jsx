import { useState } from "react";
import PropTypes from "prop-types";
import Item from "./Item";

const FoodItems = ({ items }) => {

    let [activeItems, setActiveItems] = useState([]);

    let onBuyButton = (item) => {
        let newItems = [...activeItems, item];
        setActiveItems(newItems);
    }

    return (
        <ul className="list-group">
            {items.map((item, index) => (
                <Item
                    key={index}
                    foodItem={item}
                    bought={activeItems.includes(item)}
                    handleBuyButton={() => onBuyButton(item)}
                />
            ))}
        </ul>
    );
};

FoodItems.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FoodItems;