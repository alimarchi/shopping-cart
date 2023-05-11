import "../style/Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ thumbnail, price, title, quantity, addToCart }) => {
  return (
    <li>
      <div className="cart-item">
        <div className="cart-img-container"><img src={thumbnail} alt={title} /></div>
        <div className="product-info">
          <p>{title}</p>
          <p className="cart-price">{price}€</p>
        </div>
      </div>
      <footer className="item-footer">
        <p >Qty: <strong>{quantity}</strong></p>
        <button className="plus-button" onClick={addToCart}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </footer>
    </li>
  );
};

export default CartItem;
