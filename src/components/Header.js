import Filters from "./Filters";
import "../style/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = ({handleVisibility}) => {
  return (
    <header className="header">
      <h1>
        My Shop <FontAwesomeIcon icon={faCartShopping} />
      </h1>
      <button className="cart-button" onClick={handleVisibility}>
        <FontAwesomeIcon icon={faCartShopping} size="lg" />
      </button>
      <Filters />
    </header>
  );
};

export default Header;