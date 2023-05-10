import { useEffect, useState } from "react";
import "./App.css";
import Products from "./components/Products";
import Loader from "./components/UI/spinner/Loader";
import Header from "./components/Header";
import useFilters from "./hooks/useFilters";
import { getProducts } from "./services/getProducts";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  //console.log(filteredProducts);

  useEffect(() => {
    setLoading(true);
    getProducts().then((results) => {
      setProducts(results);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Header/>
      {loading && <Loader />}
      {!loading && <Products products={filteredProducts} />}
    </>
  );
};

export default App;
