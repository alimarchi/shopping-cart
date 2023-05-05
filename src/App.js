import { useEffect, useState } from "react";
import "./App.css";
import Products from "./components/Products";
import { getProducts } from "./services/getProducts";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((results) => {
      setProducts(results);
    });
  }, []);

  return <Products products={products} />;
}

export default App;
