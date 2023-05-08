import Filters from "./Filters";
import "../style/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = ({ changeFilters }) => {
  return (
    <header className="header">
      <h1>
        My Shop <FontAwesomeIcon icon={faCartShopping} />
      </h1>
      <Filters onChange={changeFilters} />
    </header>
  );
};

export default Header;
