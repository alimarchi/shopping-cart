import { useEffect, useState } from "react";
import "./App.css";
import Products from "./components/Products";
import Loader from "./components/UI/spinner/Loader";
import { getProducts } from "./services/getProducts";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  useEffect(() => {
    setLoading(true);
    getProducts().then((results) => {
      setProducts(results);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && <Products products={products} />}
    </>
  );
}

export default App;
