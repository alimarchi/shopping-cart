import "../style/Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useCart from "../hooks/useCart";
import CartItem from "./CartItem";

const Cart = ({ visible, handleVisibility }) => {
  const { cart, clearCart, addToCart } = useCart();

  return (
    <>
      <div className={`${"modal"} ${visible && "modal-show"}`}>
        <div className="cart">
          <div className="modal-dialog">
            <div className="modal-header">
              <div className="close-button">
                <FontAwesomeIcon icon={faCircleXmark} size="xl" onClick={handleVisibility}/>
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
                      {...product}
                    />
                  ))}
                </ul>
                <div className="button-container">
                  <button className="clear-button" onClick={clearCart}>
                    Clear
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
