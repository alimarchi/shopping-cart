import { useEffect, useState } from "react";
import "./App.css";
import Products from "./components/Products";
import Loader from "./components/UI/spinner/Loader";
import { getProducts } from "./services/getProducts";
import Header from "./components/Header";
import useFilters from "./hooks/useFilters";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { filterProducts, setFilters } = useFilters();

  const filteredProducts = filterProducts(products);

  console.log(filteredProducts);

  useEffect(() => {
    setLoading(true);
    getProducts().then((results) => {
      setProducts(results);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Header changeFilters={setFilters} />
      {loading && <Loader />}
      {!loading && <Products products={filteredProducts} />}
    </>
  );
};

export default App;
