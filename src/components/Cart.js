import "../style/Cart.css";
import { useId } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import useCart from "../hooks/useCart";
import CartItem from "./CartItem";

const Cart = () => {
  const cartCheckBoxId = useId();
  const { cart, clearCart, addToCart } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckBoxId}>
        <FontAwesomeIcon icon={faCartShopping} />
      </label>
      <input id={cartCheckBoxId} type="checkbox" hidden />
      <aside className="cart">
        <ul>
          {cart.map(product => (
            <CartItem key={product.id} addToCart={() => addToCart(product)} {...product} />
          ))

          }
        </ul>
        <div className="button-container">
          <button className="clear-button" onClick={clearCart}>
            Clear
          </button>
        </div>
      </aside>
    </>
  );
};

export default Cart;
