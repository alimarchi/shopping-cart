import "../style/Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({
  thumbnail,
  price,
  title,
  quantity,
  addToCart,
  removeOne,
  removeFromCart,
}) => {
  return (
    <li>
      <div className="cart-item">
        <div className="cart-img-container">
          <img src={thumbnail} alt={title} />
        </div>
        <div className="product-info">
          <p>{title}</p>
          <p className="cart-price">{price}€</p>
        </div>
      </div>
      <footer className="item-footer">
        <div>
          Quantity:
          <span className="quantity-container">
            <FontAwesomeIcon
              icon={faMinus}
              onClick={removeOne}
              className="symbol"
            />
            <strong> {quantity} </strong>
            <FontAwesomeIcon
              icon={faPlus}
              onClick={addToCart}
              className="symbol"
            />
          </span>
          <FontAwesomeIcon
            icon={faTrashCan}
            onClick={removeFromCart}
            className="trash"
          />
        </div>
      </footer>
    </li>
  );
};

export default CartItem;
