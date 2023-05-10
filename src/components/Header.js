import Filters from "./Filters";
import "../style/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Cart from "./Cart";

const Header = () => {
  return (
    <header className="header">
      <h1>
        My Shop <FontAwesomeIcon icon={faCartShopping} />
      </h1>
      <Cart />
      <Filters />
    </header>
  );
};

export default Header;
