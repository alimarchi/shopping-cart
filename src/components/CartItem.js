import "../style/Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ thumbnail, price, title, quantity, addToCart }) => {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div className="product-info">
        <strong>{title}</strong> - €{price}
      </div>
      <footer>
        <small>Qty: {quantity}</small>
        <button className="plus-button" onClick={addToCart}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </footer>
    </li>
  );
};

export default CartItem;
