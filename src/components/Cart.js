import "../style/Cart.css";
import { useId } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faPlus } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const cartCheckBoxId = useId();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckBoxId}>
        <FontAwesomeIcon icon={faCartShopping} />
      </label>
      <input id={cartCheckBoxId} type="checkbox" hidden />
      <aside className="cart">
        <ul>
          <li>
            <img
              src="https://i.dummyjson.com/data/products/2/thumbnail.jpg"
              alt="iPhone"
            />
            <div className="product-info">
              <strong>iPhone</strong> - €899
            </div>
            <footer>
              <small>Qty: 1</small>
              <button className="plus-button">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </footer>
          </li>
        </ul>
        <div className="button-container">
          <button className="clear-button">Clear</button>
        </div>
      </aside>
    </>
  );
};

export default Cart;
