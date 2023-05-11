import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Products from "./components/Products";
import Loader from "./components/UI/spinner/Loader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import useFilters from "./hooks/useFilters";
import { getProducts } from "./services/getProducts";
import { CartProvider } from "./context/cart";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [visible, setVisible] = useState(false);

  const handleVisibility = () => {
    setVisible(!visible);
  };

  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  useEffect(() => {
    setLoading(true);
    getProducts().then((results) => {
      setProducts(results);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <CartProvider>
        {ReactDOM.createPortal(
          <Cart visible={visible} handleVisibility={handleVisibility} />,
          document.querySelector("#modal")
        )}
        <Header handleVisibility={handleVisibility} />
        {loading && <Loader />}
        {!loading && (
          <Products
            products={filteredProducts}
            handleVisibility={handleVisibility}
          />
        )}
      </CartProvider>
      <Footer />
    </>
  );
};

export default App;
