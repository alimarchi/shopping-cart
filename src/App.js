import { useEffect, useState } from "react";
import "./App.css";
import Products from "./components/Products";
import Loader from "./components/UI/spinner/Loader";
import { getProducts } from "./services/getProducts";
import Header from "./components/Header";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (products, filters) => {
    return products.filter((product) => {
      // console.log(product);
      // console.log(product.category);
      // console.log(filters.category);
      // console.log(filters.minPrice);
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  const filteredProducts = filterProducts(products, filters);

  console.log(filteredProducts)

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
}

export default App;
