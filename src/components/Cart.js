import { useState, useEffect } from "react";
import "../style/Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useCart from "../hooks/useCart";
import CartItem from "./CartItem";

const Cart = ({ visible, handleVisibility }) => {
  const { cart, clearCart, addToCart, removeOne, removeFromCart } = useCart();

  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotal = (cart) => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].quantity;
    }
    setTotalPrice(total);
  };

  useEffect(() => {
    calculateTotal(cart);
  }, [cart]);

  return (
    <>
      <div className={`${"modal"} ${visible && "modal-show"}`}>
        <div className="cart">
          <div className="modal-dialog">
            <div className="modal-header">
              <h3 className="cart-title">My Cart</h3>
              <div className="close-button">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  size="xl"
                  onClick={handleVisibility}
                />
              </div>
            </div>
            {cart.length > 0 ? (
              <>
                {" "}
                <ul>
                  {cart.map((product) => (
                    <CartItem
                      key={product.id}
                      addToCart={() => addToCart(product)}
                      removeOne={() => removeOne(product)}
                      removeFromCart={() => removeFromCart(product)}
                      {...product}
                    />
                  ))}
                </ul>
                <div className="total-container">
                  <p>Total</p>
                  <p><strong>{totalPrice}€</strong></p>
                </div>
                <div className="button-container">
                  <button className="clear-button" onClick={clearCart}>
                    Clear cart
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="empty-cart">Your cart is empty!</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
