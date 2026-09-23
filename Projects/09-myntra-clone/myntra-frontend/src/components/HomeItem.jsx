import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

const HomeItem = ({ item }) => {

  const dispatch = useDispatch();
  const bagItems = useSelector(store => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  }

  return (
    <div className="item-container">
      <img
        className="item-image"
        src={item.image}
        alt={item.item_name}
      />

      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>

      <div className="company-name">
        {item.company}
      </div>

      <div className="item-name">
        {item.item_name}
      </div>

      <div className="price">
        <span className="current-price">
          Rs {item.current_price}
        </span>

        <span className="original-price">
          Rs {item.original_price}
        </span>

        <span className="discount">
          ({item.discount_percentage}% OFF)
        </span>
      </div>

      {elementFound ? <button type="button" className="btn-add-bag btn btn-danger" onClick={handleRemove} > <AiFillDelete />    Remove</button> :
        <button type="button" className="btn-add-bag btn btn-success" onClick={handleAddToBag}><GrAddCircle /> Add to Bag</button>
      }
    </div >
  );
};

HomeItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      stars: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
    company: PropTypes.string.isRequired,
    item_name: PropTypes.string.isRequired,
    current_price: PropTypes.number.isRequired,
    original_price: PropTypes.number.isRequired,
    discount_percentage: PropTypes.number.isRequired,
  }).isRequired,
};

export default HomeItem;